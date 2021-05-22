
# API Reference

## Get list products highlight of week 
```http
  GET /api/v1/products/highlight-of-week?limit={limitNum}
```
### Request
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
|`limitNum`|`int`| `number of products response` |
### Response
`[
    {
        "_id": 5,
        "count": 5,
        "name": "Java thư viện đồ họa Swing",
        "user_id": 1,
        "category_id": 1,
        "url_image": "https://devpro.edu.vn/uploads/studies/1533113810.png"
    },
    {
        "_id": 8,
        "count": 5,
        "name": "Lập trình PHP từ cơ bản đến nâng cao",
        "user_id": 2,
        "category_id": 1,
        "url_image": "https://banner2.cleanpng.com/20180723/yh/kisspng-logo-php-computer-icons-postgresql-logo-5b559bb38d3097.2908767015323370755783.jpg"
    }
]`
#### count: number registed
## Get list products most of views
```http
  GET /api/v1/products/most-of-view?limit={limitNum}
```
### Request
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
|`limitNum`|`int`| `number of products response` |
### Response
`[
    {
        "_id": 6,
        "name": "Java thư viện đồ họa Swing",
        "user_id": 1,
        "category_id": 1,
        "url_image": "https://devpro.edu.vn/uploads/studies/1533113810.png",
        "number_views": 67
    },
    {
        "_id": 24,
        "name": "Dựng video chuyên nghiệp với Adobe Premiere",
        "user_id": 1,
        "category_id": 4,
        "url_image": "https://arena.fpt.edu.vn/wp-content/uploads/2020/05/dung-phim-adobe-premiere-2.jpg",
        "number_views": 65
    }
]`
#### number_views: number of views
## Get list products lastest
```http
  GET /api/v1/products/most-of-view?limit={limitNum}
```
### Request
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
|`limitNum`|`int`| `number of products response` |
### Response
`[
    {
        "_id": 1,
        "name": "jQuery",
        "user_id": 1,
        "category_id": 1,
        "url_image": "https://1.bp.blogspot.com/-P08TU96yQsU/VrB0Vcqq88I/AAAAAAAADSU/muRglwvmY5g/s1600/jquery-icon.png",
        "create_at": "2021-05-16T23:47:19.000Z"
    },
    {
        "_id": 2,
        "name": "Git",
        "user_id": 1,
        "category_id": 1,
        "url_image": "https://res.cloudinary.com/dominhhai/image/upload/code/git.png",
        "create_at": "2021-05-16T23:47:19.000Z"
    }
]`
#### create_at: created time

  