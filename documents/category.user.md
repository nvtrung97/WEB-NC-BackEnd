
# API Reference

## Get all category
```http
  GET /api/v1/categories
```
### Response
`[{
    "_id": 1,
    "name": "Khóa học lập trình",
    "create_at": "2021-05-16T23:47:19.000Z",
    "update_at": "2021-05-16T23:47:19.000Z"
  },
  {
    "_id": 2,
    "name": "Khóa học tiếng anh",
    "create_at": "2021-05-16T23:47:19.000Z",
    "update_at": "2021-05-16T23:47:19.000Z"
  }
]`
#
## Get category by id
```http
  GET /api/v1/categories/${_id}
```
### Request
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
|`_id`|`int`| `identity` |
### Response
`{
    "_id": 1,
    "name": "Khóa học lập trình",
    "create_at": "2021-05-16T23:47:19.000Z",
    "update_at": "2021-05-16T23:47:19.000Z"
  }`
## Get list most categories are registed
```http
  GET /api/v1/categories/most-registed?limit={limitNum}
```
### Request
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
|`limitNum`|`int`| `number of categories response` |
### Response
`[
    {
        "_id": 1,
        "name": "Khóa học lập trình",
        "count": 17
    },
    {
        "_id": 4,
        "name": "Khóa học đồ họa",
        "count": 1
    }
]`
### count: number registed


  