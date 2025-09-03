# Contributing to the Slate Protocol

First off, thank you for considering contributing to Slate! We are excited to build a strong, open-source community around this project. Every contribution, from a small typo fix to a major feature, is valuable.

This document provides a set of guidelines for contributing to Slate. These are mostly guidelines, not strict rules. Use your best judgment, and feel free to propose changes to this document in a pull request.

## Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior.

## How Can I Contribute?

There are many ways to contribute to the Slate Protocol, both technical and non-technical.

- **Reporting Bugs**: If you find a bug, please create a detailed issue in our GitHub repository.
- **Suggesting Enhancements**: If you have an idea for a new feature or an improvement to an existing one, please open an issue to start a discussion.
- **Writing Code**: Look through our open issues, especially those labeled `good first issue` or `help wanted`.
- **Improving Documentation**: Our documentation can always be improved. If you see something that is unclear or incorrect, please submit a pull request.

## Your First Code Contribution

Unsure where to begin contributing to Slate? You can start by looking through these `good first issue` and `help wanted` issues:

- **Good first issues** - issues which should only require a few lines of code, and a test or two.
- **Help wanted issues** - issues which should be a bit more involved than `good first issue` issues.

## Development Setup

To get started, you will need to have Rust installed on your system.

1. Fork the slateprotocol repository on GitHub.
2. Clone your fork locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/slateprotocol.git
   ```
3. Navigate to the project directory:
   ```bash
   cd slateprotocol
   ```
4. Build the project to ensure everything is set up correctly:
   ```bash
   cargo build
   ```
5. Run the tests:
   ```bash
   cargo test
   ```

## Pull Request Process

1. Ensure any new code is accompanied by corresponding unit tests.
2. Ensure all tests pass by running `cargo test`.
3. Update the README.md or other relevant documentation if your changes affect them.
4. Create a pull request against the `main` branch of the main slateprotocol repository.
5. Please provide a clear and descriptive title and description for your pull request. Link to any relevant issues.
6. A core maintainer will review your pull request and provide feedback. Please be responsive to any comments or requested changes.