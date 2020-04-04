# gridsome-remark-table-align
Gridsome Remark plugin move the `table` align defintion to the `tableCell` definition.

With this changes, you can use [@noxify/gridsome-remark-classes](https://github.com/noxify/gridsome-remark-classes) to add your own classes.


# Installation

```
npm install --save @noxify/gridsome-remark-table-align
```

# Configuration

## Globally

Inside the `gridsome.config.js` you can define it globally to enable this transformer for all data sources.

```js
module.exports = {

  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Blog',
        path: './content/blog/**/*.md',
      }
    }
  ],

  transformers : {
    remark : {
      plugins : [
        '@noxify/gridsome-remark-table-align'
      ]
    }
  }
}
```

## Data Source

Inside the `gridsome.config.js` you can define it individual for each data source.

```js
module.exports = {

  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Blog',
        path: './content/blog/**/*.md',
        remark: {
          plugins: [
            '@noxify/gridsome-remark-table-align'
          ]
        }
      }
    }
  ]
}
```

# Example

## Example table

```md
| Tables   |      Are      |  Cool |
|----------|:-------------:|------:|
| col 1 is |  left-aligned | $1600 |
| col 2 is |    centered   |   $12 |
| col 3 is | right-aligned |    $1 |
```

## gridsome.config.js

```js
transformers : {
  remark : {
    plugins : [
      '@noxify/gridsome-remark-table-align',
      ['@noxify/gridsome-remark-classes', {
        'table' : 'table',
        'tableCell[align=center]' : 'text-center',
        'tableCell[align=right]': 'text-right',
      }]
    ]
  }
},
```

## Rendered table

```html
<table class="table">
  <thead>
    <tr>
      <th>Tables</th>
      <th class="text-center">Are</th>
      <th class="text-right">Cool</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>col 1 is</td>
      <td class="text-center">left-aligned</td>
      <td class="text-right">$1600</td>
    </tr>
    <tr>
      <td>col 2 is</td>
      <td class="text-center">centered</td>
      <td class="text-right">$12</td>
    </tr>
    <tr>
      <td>col 3 is</td>
      <td class="text-center">right-aligned</td>
      <td class="text-right">$1</td>
    </tr>
  </tbody>
</table>
```