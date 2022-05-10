<p align="center">
  <img alt="Better Console" height="350" src="https://github.com/matheussartori/better-console/raw/main/.github/assets/logo.png" />
</p>

<h3 align="center">
  Better Console
</h3>

<blockquote align="center">Better terminal outputs with easy commands, highly customizable.</blockquote>
<br>

<p align="center">
  <a href="https://matheussartori.com.br">
    <img alt="Made by Matheus Sartori" src="https://img.shields.io/badge/made%20by-Matheus%20Sartori-%2304D361">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">
</p>

<p align="center">
  <a href="#about-the-project">About the project</a><br>
  <a href="#installation">Installation</a><br>
  <a href="#usage">Usage</a><br>
  <a href="#api">API</a><br>
  <a href="#wrappers">Wrappers</a><br>
  <a href="#types">Types</a><br>
</p>

## About the project
This JavaScript library was made to improve terminal outputs, but remember that console.log is an asynchronous function, and they can slow your performance.

I felt the need to do something like this because lately I've been doing a lot of scripts to throw data from one system to another, and this library has helped me a lot.

## Installation
```bash
npm install @matheussartori/better-console
# or
yarn add @matheussartori/better-console
# or
pnpm install @matheussartori/better-console
```

## Usage
```javascript
import { BConsole } from '@matheussartori/better-console'

BConsole.print('Hello World!', {
  date: {
    show: true,
    textColor: 'blackBright'
  },
  textColor: 'cyan',
  emojiLeft: 'fire'
})
```
<img alt="BConsole print method" src="https://github.com/matheussartori/better-console/raw/main/.github/assets/bconsole-print-example.png" />


```javascript
import { BConsole } from '@matheussartori/better-console'

BConsole.printLong([
  {
    data: 'Now we have ',
    options: {
      textColor: 'blueBright'
    }
  }, {
    data: '2 different styles.',
    options: {
      backgroundColor: 'bgBlue'
    }
  }
], {
  date: {
    show: true,
    textColor: 'blackBright'
  }
})
```
<img alt="BConsole print method" src="https://github.com/matheussartori/better-console/raw/main/.github/assets/bconsole-print-long-example.png" />

## API
### Print method
```javascript
import { BConsole } from '@matheussartori/better-console'

BConsole.print(data, options)

// Examples
BConsole.print('Server is running at port 3333')

BConsole.print(JSON.stringify(response.data), {
  textColor: 'cyanBright',
  emojiRight: 'bomb'
})

BConsole.print('Time now', {
  date: {
    show: true
  }
})
```

The print method is used when you want to print a single value through the console. The first (data) argument could be any type that will work on the default console.

The second argument (options) is optional, and here you can find all the definitions:

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Default</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>date.show</td>
      <td><code>false</code></td>
      <td>Shows a timestamp before the data.</td>
    </tr>
    <tr>
      <td>date.textColor</td>
      <td>System default</td>
      <td>Changes the date text color.</td>
    </tr>
    <tr>
      <td>date.format</td>
      <td><code>yyyy-MM-dd HH:mm:ss</code></td>
      <td>Changes the date format. For the format complete docs, follow the <a href="https://date-fns.org/v2.28.0/docs/format"><strong>date-fns</strong></a> documentation.</td>
    </tr>
    <tr>
      <td>textColor</td>
      <td>System default</td>
      <td>Changes the text color. See the color values above.</td>
    </tr>
    <tr>
      <td>backgroundColor</td>
      <td>System default</td>
      <td>Changes the text background color. See the background color values above.</td>
    </tr>
    <tr>
      <td>emojiRight</td>
      <td><code>null</code></td>
      <td>Add am emoji after the data. See the emoji values above.</td>
    </tr>
    <tr>
      <td>emojiLeft</td>
      <td><code>null</code></td>
      <td>Add am emoji before the data. See the emoji values above.</td>
    </tr>
  </tbody>
</table>

### Print long method
```javascript
import { BConsole } from '@matheussartori/better-console'

BConsole.printLong(data, options)

// Examples
BConsole.printLong([
  {
    data: 'Hello, ',
    options: {
      textColor: 'cyan'
    }
  },
  {
    data: 'World!',
    options: {
      backgroundColor: 'bgMagenta'
    }
  }
], {
  date: {
    show: true,
    format: 'HH:mm:ss'
  }
})
```
The print long method is used when you want to print two or more values in the same line, with different styles, through the console. The first (data) argument must be an array of <code>PrintLongItem</code>, which consists of the data (any value) and some options.

Here you can find all the <code>PrintLongItem</code> definitions.

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Default</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>data</td>
      <td><code>null</code></td>
      <td>Information that will be printed on the terminal.</td>
    </tr>
    <tr>
      <td>options.textColor</td>
      <td>System default</td>
      <td>Changes the date text color.</td>
    </tr>
    <tr>
      <td>options.backgroundColor</td>
      <td>System default</td>
      <td>Changes the text background color. See the background color values above.</td>
    </tr>
  </tbody>
</table>

The second argument (options) is optional, and here you can find all the definitions:

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Default</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>date.show</td>
      <td><code>false</code></td>
      <td>Shows a timestamp before the data.</td>
    </tr>
    <tr>
      <td>date.textColor</td>
      <td>System default</td>
      <td>Changes the date text color.</td>
    </tr>
    <tr>
      <td>date.format</td>
      <td><code>yyyy-MM-dd HH:mm:ss</code></td>
      <td>Changes the date format. For the format complete docs, follow the <a href="https://date-fns.org/v2.28.0/docs/format"><strong>date-fns</strong></a> documentation.</td>
    </tr>
    <tr>
      <td>emojiRight</td>
      <td><code>null</code></td>
      <td>Add am emoji after the data. See the emoji values above.</td>
    </tr>
    <tr>
      <td>emojiLeft</td>
      <td><code>null</code></td>
      <td>Add am emoji before the data. See the emoji values above.</td>
    </tr>
  </tbody>
</table>

The <code>textColor</code> and <code>backgroundColor</code> are not in the print long options, because they belong to each item of the data.

## Wrappers

Wrappers are functions that have the options already defined and can't be changed. They can be used when you don't want to customize the BConsole, or create a HOC.

Right now, only the <code>ServerWrappers</code> are available, and they don't receive any other argument besides the data.

```javascript
import { ServerWrappers } from '@matheussartori/better-console'

ServerWrappers.info('Information')
ServerWrappers.success('Success')
ServerWrappers.error('Error')
```

<img alt="BConsole print method" src="https://github.com/matheussartori/better-console/raw/main/.github/assets/server-wrappers-example.png" />

## Types

### Text Color types

The color types can be used to change the text color, on <code>print</code> and <code>printLong</code> methods.

For more details, see <a href="https://github.com/chalk/chalk#styles">chalk</a> documentation.

- `black`
- `red`
- `green`
- `yellow`
- `blue`
- `magenta`
- `cyan`
- `white`
- `blackBright`
- `redBright`
- `greenBright`
- `yellowBright`
- `blueBright`
- `magentaBright`
- `cyanBright`
- `whiteBright`

### Background Color types

The background color types can be used to change the text background color, on <code>print</code> and code>printLong</code> methods.

For more details, see <a href="https://github.com/chalk/chalk#styles">chalk</a> documentation.

- `bgBlack`
- `bgRed`
- `bgGreen`
- `bgYellow`
- `bgBlue`
- `bgMagenta`
- `bgCyan`
- `bgWhite`
- `bgBlackBright`
- `bgRedBright`
- `bgGreenBright`
- `bgYellowBright`
- `bgBlueBright`
- `bgMagentaBright`
- `bgCyanBright`
- `bgWhiteBright`

### Emoji types

The emoji types are used to add an emoji to the beggining or the end of a line.

Not all emojis are available and you can simple copy and paste them into the data, but you can also use the options for this.

- `tangerine` (🍊)
- `redHeart` (❤️)
- `fire` (🔥)
- `faceWithPeekingEye` (🫣)
- `faceHoldingBackTears` (🥹)
- `heartHands` (🫶)
- `dottedLineFade` (🫥)
- `smilingFaceWithSmilingEyes` (😊)
- `bomb` (💣)
- `battery` (🔋)
- `lightbulb` (💡)
- `flag:brazil` (🇧🇷)
