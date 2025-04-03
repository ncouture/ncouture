#!/usr/bin/env python3
"""Personal CV Formatter - A standalone Python script to show silly terminal colors in a Github action that displays my short CV.
"""

import os
import re
import sys
import argparse
from datetime import datetime

# ANSI color codes
class Colors:
    RESET = "\033[0m"
    BOLD = "\033[1m"
    ITALIC = "\033[3m"
    UNDERLINE = "\033[4m"

    # Foreground colors
    BLACK = "\033[30m"
    RED = "\033[31m"
    GREEN = "\033[32m"
    YELLOW = "\033[33m"
    BLUE = "\033[34m"
    MAGENTA = "\033[35m"
    CYAN = "\033[36m"
    WHITE = "\033[37m"

    # Bright foreground colors
    BRIGHT_BLACK = "\033[90m"
    BRIGHT_RED = "\033[91m"
    BRIGHT_GREEN = "\033[92m"
    BRIGHT_YELLOW = "\033[93m"
    BRIGHT_BLUE = "\033[94m"
    BRIGHT_MAGENTA = "\033[95m"
    BRIGHT_CYAN = "\033[96m"
    BRIGHT_WHITE = "\033[97m"

    # Background colors
    BG_BLUE = "\033[44m"
    BG_MAGENTA = "\033[45m"

# Box drawing characters
class BoxChars:
    H_LINE = "═"
    V_LINE = "║"
    TL_CORNER = "╔"
    TR_CORNER = "╗"
    BL_CORNER = "╚"
    BR_CORNER = "╝"
    T_DOWN = "╦"
    T_UP = "╩"
    T_RIGHT = "╠"
    T_LEFT = "╣"
    CROSS = "╬"

def get_terminal_width():
    """Get the terminal width"""
    try:
        return os.get_terminal_size().columns
    except (AttributeError, OSError):
        return 80  # Default fallback width

def create_box(title, width=None):
    """Create a decorative box with a title"""
    if width is None:
        width = get_terminal_width()

    # Ensure the title fits in the box
    if len(title) > width - 4:
        title = title[:width - 7] + "..."

    # Calculate padding for centering the title
    padding_left = (width - len(title) - 2) // 2
    padding_right = width - len(title) - 2 - padding_left

    # Create the box
    top_border = f"{Colors.BLUE}{BoxChars.TL_CORNER}{BoxChars.H_LINE * (width - 2)}{BoxChars.TR_CORNER}{Colors.RESET}"
    title_line = f"{Colors.BLUE}{BoxChars.V_LINE}{Colors.RESET}{' ' * padding_left}{Colors.BOLD}{Colors.BRIGHT_WHITE}{Colors.BG_BLUE}{title}{Colors.RESET}{' ' * padding_right}{Colors.BLUE}{BoxChars.V_LINE}{Colors.RESET}"
    mid_border = f"{Colors.BLUE}{BoxChars.T_RIGHT}{BoxChars.H_LINE * (width - 2)}{BoxChars.T_LEFT}{Colors.RESET}"

    return f"{top_border}\n{title_line}\n{mid_border}"

def create_footer(width=None):
    """Create a decorative footer"""
    if width is None:
        width = get_terminal_width()

    footer = f"{Colors.BLUE}{BoxChars.BL_CORNER}{BoxChars.H_LINE * (width - 2)}{BoxChars.BR_CORNER}{Colors.RESET}"
    return footer

def format_line(line, width=None):
    """Format a single line with appropriate styling"""
    if width is None:
        width = get_terminal_width()

    # Define regex patterns for different elements
    patterns = {
        # Headers
        r"^# (.*)$": lambda m: f"{Colors.BOLD}{Colors.BRIGHT_BLUE}{m.group(0)}{Colors.RESET}",
        r"^## (.*)$": lambda m: f"{Colors.BOLD}{Colors.BLUE}{m.group(0)}{Colors.RESET}",
        r"^### (.*)$": lambda m: f"{Colors.BOLD}{Colors.CYAN}{m.group(0)}{Colors.RESET}",

        # Blockquotes
        r"^> (.*)$": lambda m: f"{Colors.GREEN}{Colors.ITALIC}{m.group(0)}{Colors.RESET}",

        # Bold text (job titles)
        r"\*\*(.*?)\*\*": lambda m: f"{Colors.BOLD}{Colors.YELLOW}{m.group(1)}{Colors.RESET}",

        # Companies and dates
        r"\|(.*?)\|": lambda m: f"{Colors.BRIGHT_BLACK}{Colors.ITALIC}|{m.group(1)}|{Colors.RESET}",

        # Bullet points
        r"^- (.*)$": lambda m: f"{Colors.GREEN}- {m.group(1)}{Colors.RESET}",

        # Technical keywords
        r"\b(Azure|GCP|AWS|OCI|Alibaba|Terraform|ARM|Bicep|HCL|Kubernetes|CI/CD|IAM/PAM|DevOps|Zero-trust|Microservice)\b":
            lambda m: f"{Colors.MAGENTA}{m.group(1)}{Colors.RESET}",

        # Contact info
        r"([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})":
            lambda m: f"{Colors.YELLOW}{Colors.UNDERLINE}{m.group(1)}{Colors.RESET}",
        r"(\+\d{1}-\d{3}-\d{3}-\d{4})":
            lambda m: f"{Colors.YELLOW}{Colors.UNDERLINE}{m.group(1)}{Colors.RESET}",

        # Links
        r"\[(.*?)\]\((.*?)\)":
            lambda m: f"[{Colors.CYAN}{Colors.UNDERLINE}{m.group(1)}{Colors.RESET}]({Colors.BRIGHT_BLACK}{m.group(2)}{Colors.RESET})"
    }

    # Apply all patterns
    formatted_line = line
    for pattern, formatter in patterns.items():
        formatted_line = re.sub(pattern, formatter, formatted_line)

    # Wrap the formatted line with box characters
    return f"{Colors.BLUE}{BoxChars.V_LINE}{Colors.RESET} {formatted_line}{' ' * (width - len(line) - 4)}{Colors.BLUE} {BoxChars.V_LINE}{Colors.RESET}"

def format_cv(file_path):
    """Read and format the CV file"""
    try:
        with open(file_path, 'r') as file:
            content = file.readlines()
    except FileNotFoundError:
        print(f"Error: File '{file_path}' not found.")
        sys.exit(1)

    width = get_terminal_width()

    # Extract the title from the first line (assumed to be a level 1 header)
    title = content[0].strip().lstrip('# ') if content else "Professional CV"

    # Create the box and format each line
    output = [create_box(title.upper(), width)]

    for line in content:
        line = line.rstrip()
        if line.strip():  # Skip empty lines
            output.append(format_line(line, width))
        else:
            # For empty lines, just add a spacer
            output.append(f"{Colors.BLUE}{BoxChars.V_LINE}{Colors.RESET}{' ' * (width - 2)}{Colors.BLUE}{BoxChars.V_LINE}{Colors.RESET}")

    # Add the footer
    output.append(create_footer(width))

    # Add rendering info
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    info = f"Rendered on {timestamp} with formatter.py"
    info_padding = (width - len(info) - 2) // 2
    output.append(f"{' ' * info_padding}{Colors.BRIGHT_BLACK}{info}{Colors.RESET}")

    return "\n".join(output)

def main():
    parser = argparse.ArgumentParser(description="Format a Markdown CV for terminal display")
    parser.add_argument("file", help="Path to the Markdown CV file")
    parser.add_argument("--output", "-o", help="Output file (default: stdout)")
    args = parser.parse_args()

    formatted_cv = format_cv(args.file)

    if args.output:
        with open(args.output, 'w') as file:
            # Strip ANSI codes if writing to a file
            ansi_escape = re.compile(r'\x1B\[[0-?]*[ -/]*[@-~]')
            clean_output = ansi_escape.sub('', formatted_cv)
            file.write(clean_output)
        print(f"Formatted CV saved to {args.output}")
    else:
        print(formatted_cv)

if __name__ == "__main__":
    main()
