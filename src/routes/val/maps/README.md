# Maps Endpoint

These endpoints allow you to request maps.

## GET

`/val/maps`
`/val/maps/random`

### Maps

#### Maps Parameters

|          Name | Required |  Type   | Description                                                                                                                                                           |
| -------------:|:--------:|:-------:| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     `fields` | optional | string | Returns array of maps                                                                     |                                                           |

#### Maps Response

```json
{
  "status": "success",
  "standard": [
    "Ascent",
    "Breeze",
    "Bind",
    "Fracture",
    "Haven",
    "Icebox",
    "Lotus",
    "Pearl",
    "Split"
  ],
  "rotation": [
    "Ascent",
    "Bind",
    "Fracture",
    "Haven",
    "Lotus",
    "Pearl",
    "Split"
  ],
  "tdm": [
    "Piazza",
    "District",
    "Kabah"
  ]
}
```

### Maps Filtering

`?fields=standard`

```json
{
  "standard": [
    "Ascent",
    "Breeze",
    "Bind",
    "Fracture",
    "Haven",
    "Icebox",
    "Lotus",
    "Pearl",
    "Split"
  ]
}
```

`?fields=rotation`

```json
{
  "rotation": [
    "Ascent",
    "Bind",
    "Fracture",
    "Haven",
    "Lotus",
    "Pearl",
    "Split"
  ]
}
```

`?fields=tdm`

```json
{
  "tdm": [
    "Piazza",
    "District",
    "Kabah"
  ]
}
```

### Random

#### Random Parameters

|          Name | Required |  Type   | Description                                                                                                                                                           |
| -------------:|:--------:|:-------:| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     `fields` | optional | string | Returns array of maps                                                                     |                                                           |

#### Random Response

```json
{
  "status": "success",
  "standard": "Ascent",
  "rotation": "Ascent",
  "tdm": "Piazza"
}
```

### Filtering

`?fields=standard`

```json
{
  "standard": "Ascent"
}
```

`?fields=rotation`

```json
{
  "rotation": "Ascent",
}
```

`?fields=tdm`

```json
{
  "tdm": "Piazza"
}
```
