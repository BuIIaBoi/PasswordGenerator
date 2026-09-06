# Password Generator

A browser-based password generator that builds a random password from a customizable character set — lowercase, uppercase, numbers, and symbols.

## Features

- Choose the password length
- Toggle which character types to include (lowercase, uppercase, numbers, symbols)
- Passwords are generated using `crypto.getRandomValues()`, a cryptographically secure random source — not `Math.random()`, which is predictable and unsuitable for anything security-related
- Input validation: generating with no character types selected, or an invalid length, returns a clear message instead of a broken password

## How to Run

Open `index.html` in any modern browser. No build step or server required — this one works fine straight from the file system.

## How to Use

1. Enter the desired password length.
2. Check the character types you want included.
3. Click "Generate password."

## Project Structure

| File | Purpose |
|---|---|
| `index.html` | Page markup — length input, checkboxes, generate button |
| `style.css` | Styling |
| `index.js` | Password generation logic and secure random number handling |

## Built With

- HTML
- CSS
- JavaScript (vanilla)
