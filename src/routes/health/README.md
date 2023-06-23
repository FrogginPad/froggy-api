# Health Endpoints

Foo

## Ping

GET `/ping`

### Ping Response

```json
{
  "status": "success",
  "data": "pong"
}
```

## Status

GET `/status`

### Status Response

ValResponse is formatted from [val-status-v1](https://developer.riotgames.com/apis#val-status-v1)

```json
{
  "status": "success",
  ValResponse
}
```
