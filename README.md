# 🐇 bundlespeed

Guard against a slow webpack build by pointing `bundlespeed` to a webpack stats.json file & specify a threshold.

## Installation
#### npm
```
npm i --save-dev bundlespeed
```

#### yarn
```
yarn add bundlespeed
```

## Usage

```
bundlespeed -f stats.json -t 30000
```

### Options

#### File
The stats.json file produced by webpack.
`-f, --file`

#### Threshold
The threshold for the build time in milliseconds
`-t, --threshold`
