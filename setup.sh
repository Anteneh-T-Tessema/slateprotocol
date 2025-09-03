#!/bin/bash

# Slate Protocol Setup Script
# This script sets up the development environment for Slate Protocol

echo "🚀 Setting up Slate Protocol Development Environment..."
echo ""

# Check if Rust is installed
if ! command -v rustc &> /dev/null; then
    echo "❌ Rust is not installed. Please install Rust first:"
    echo "   curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh"
    exit 1
else
    echo "✅ Rust is installed: $(rustc --version)"
fi

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first:"
    echo "   https://nodejs.org/en/download/"
    exit 1
else
    echo "✅ Node.js is installed: $(node --version)"
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
else
    echo "✅ npm is installed: $(npm --version)"
fi

echo ""
echo "🔧 Building Rust Protocol..."

# Build the Rust protocol
if cargo build; then
    echo "✅ Rust protocol built successfully"
else
    echo "❌ Failed to build Rust protocol"
    exit 1
fi

echo ""
echo "🧪 Running Rust tests..."

# Run Rust tests
if cargo test; then
    echo "✅ All Rust tests passed"
else
    echo "❌ Some Rust tests failed"
    exit 1
fi

echo ""
echo "📦 Installing Next.js dependencies..."

# Navigate to whitepaper directory and install dependencies
cd slate-whitepaper

if npm install; then
    echo "✅ Next.js dependencies installed successfully"
else
    echo "❌ Failed to install Next.js dependencies"
    exit 1
fi

echo ""
echo "🏗️ Building Next.js whitepaper..."

# Build the Next.js application
if npm run build; then
    echo "✅ Next.js whitepaper built successfully"
else
    echo "❌ Failed to build Next.js whitepaper"
    exit 1
fi

cd ..

echo ""
echo "🎉 Setup completed successfully!"
echo ""
echo "📋 Next steps:"
echo "   1. Start the Rust development server: cargo run"
echo "   2. Start the Next.js whitepaper: cd slate-whitepaper && npm run dev"
echo "   3. Open http://localhost:3000 to view the interactive whitepaper"
echo ""
echo "🔗 Useful commands:"
echo "   • cargo build          - Build the Rust protocol"
echo "   • cargo test           - Run Rust tests"
echo "   • cargo run            - Start the protocol node"
echo "   • npm run dev          - Start Next.js development server (in slate-whitepaper/)"
echo "   • npm run build        - Build Next.js for production (in slate-whitepaper/)"
echo ""
echo "📚 Documentation:"
echo "   • README.md            - Project overview"
echo "   • CONTRIBUTING.md      - How to contribute"
echo "   • ROADMAP.md           - Development roadmap"
echo "   • SECURITY.md          - Security policy"
echo ""
echo "Happy building! 🏗️"