# haute-or-naute

Submission for Nordstrom Rack community hack night

Start-Up Instructions:

1.  Install MongoDb and run mongod locally

2.  In postman, create new post and for endpoint 'http://localhost:3000/api/shoes'
    with body:
    {
    "url": "https://www.hautelookcdn.com/products/NL1800803/large/8740694.jpg?interpolation=lanczos-none&downsize=434:650&output-quality=90&output-format=jpeg",
    "gender": "women",
    "category" : "sandal"
    }

..and repeat this for the following:

https://www.hautelookcdn.com/resizer/396x594/products/L1219/large/8448690.jpg , women, boot

https://www.hautelookcdn.com/resizer/396x594/products/L1488/large/8442804.jpg , women, flat

https://www.hautelookcdn.com/resizer/434x650/products/NL1803801/large/8740726.jpg , women, sandal

https://www.hautelookcdn.com/resizer/396x594/products/F3140S1/large/8737640.jpg, women flat

https://www.hautelookcdn.com/resizer/434x650/products/L1235/large/8493788.jpg , women, flat

https://www.hautelookcdn.com/resizer/434x650/products/REETA-1/large/8174150.jpg , women , heel

https://www.hautelookcdn.com/resizer/434x650/products/TAIKA-1/large/8456383.jpg , women, boot

https://www.hautelookcdn.com/resizer/434x650/products/BC677/large/8339262.jpg , women , flat

3.  Run command 'npm start'
