# Mock Server

Simple server for API testing using mocks.


[![Twitter Follow](https://img.shields.io/twitter/follow/rodrigokamada.svg?style=social)](https://twitter.com/intent/follow?screen_name=rodrigokamada)



## Usage


**1.** Clone the repository.

```shell
git clone https://github.com/rodrigokamada/mock-server.git
```

**2.** Install the dependencies.

```shell
npm install
```

**3.** Run the project. The parameter `PORT` is optional. The default port is `3000`.

```shell
npm run start [PORT]
```

or

```shell
npm run start:watch [PORT]
```



## Configuration

Configure the files used for the mock in the `config` directory.

In the `config/sample.js` file is an example of configuring the `GET /v1/books` and `POST /v1/books` endpoints.



## Examples

**1.** Using HTTP GET method.

*Request:*

```shell
curl --verbose --request GET "http://localhost:3000/v1/books"
```

*Response:*

```json
[
  {
    "id": "04098a77-a32f-4d14-b938-3b4397aeed29",
    "name": "Some name 1",
    "author": "Some author 1"
  },
  {
    "id": "c71dc35b-ae37-4e09-aa1d-1afd0a927e73",
    "name": "Some name 2",
    "author": "Some author 2"
  }
]
```


**2.** Using HTTP POST method.

*Request:*

```shell
curl --verbose --request POST "http://localhost:3000/v1/books" \
--data '{
  "name": "Some name 1",
  "author": "Some author 1"
}'
```

*Response:*

```json
{
  "id": "04098a77-a32f-4d14-b938-3b4397aeed29",
  "name": "Some name 1",
  "author": "Some author 1"
}
```



I suggest using the [ngrok](https://ngrok.com/) tool for external access.
