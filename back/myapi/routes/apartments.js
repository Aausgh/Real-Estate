var express = require('express');
var router = express.Router();



let dataArray = [
    {
      "id": "2",
      "name": "Skyline Plaza",
      "image": {
        "mainImg": "https://images.unsplash.com/photo-1614969263964-f381e32b337d?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "img2": "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXBhcnRtZW50JTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D",
        "img3": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFwYXJ0bWVudCUyMGludGVyaW9yfGVufDB8fDB8fHww",
        "img4": "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGFwYXJ0bWVudCUyMGludGVyaW9yfGVufDB8fDB8fHww",
        "img5": "https://images.unsplash.com/photo-1524549207884-e7d1130ae2f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXBhcnRtZW50JTIwYmFsY29ueXxlbnwwfHwwfHx8MA%3D%3D",
        "img6": "https://images.unsplash.com/photo-1538430224529-7eceed6ab252?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGFwYXJ0bWVudCUyMGJhdGhyb29tfGVufDB8fDB8fHww",
        "img7": "https://images.unsplash.com/photo-1613013441633-785518cf90b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJhbGNvbnl8ZW58MHx8MHx8fDA%3D" 
      },
      "price": "$8500",
      "location": {
        "city": "Metropolis",
        "state": "BBB",
        "streetName": "Broadway"
      },
      "description": "Modern and stylish apartment with breathtaking skyline views. The apartment showcases contemporary architectural design, blending seamlessly with the urban landscape. Large windows allow natural light to flood the living spaces, offering panoramic views of the city skyline. Clean lines, sleek finishes, and thoughtful layouts create a stylish and inviting atmosphere.",
      "bedrooms": "3",
      "bathrooms": "2"
  },
    
    {
      "id": "3",
      "name": "Downtown Oasis",
      "image": {
        "mainImg": "https://images.unsplash.com/photo-1612637968894-660373e23b03?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "img2": "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXBhcnRtZW50JTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D",
        "img3": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFwYXJ0bWVudCUyMGludGVyaW9yfGVufDB8fDB8fHww",
        "img4": "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGFwYXJ0bWVudCUyMGludGVyaW9yfGVufDB8fDB8fHww",
        "img5": "https://images.unsplash.com/photo-1524549207884-e7d1130ae2f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXBhcnRtZW50JTIwYmFsY29ueXxlbnwwfHwwfHx8MA%3D%3D",
        "img6": "https://images.unsplash.com/photo-1538430224529-7eceed6ab252?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGFwYXJ0bWVudCUyMGJhdGhyb29tfGVufDB8fDB8fHww" ,
        "img7": "https://images.unsplash.com/photo-1613013441633-785518cf90b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJhbGNvbnl8ZW58MHx8MHx8fDA%3D"
      },
      "price": "$10500",
      "location": {
        "city": "Downtown",
        "state": "CCC",
        "streetName": "Main Street"
      },
      "description": "Exclusive apartment with a private oasis in the heart of the city. The apartment showcases contemporary architectural design, blending seamlessly with the urban landscape. Large windows allow natural light to flood the living spaces, offering panoramic views of the city skyline. Clean lines, sleek finishes, and thoughtful layouts create a stylish and inviting atmosphere.",
      "bedrooms": "4",
      "bathrooms": "3"
    },
    {
      "id": "4",
      "name": "Sunset View Apartments",
      "image": {
        "mainImg": "https://images.unsplash.com/photo-1588588430550-de2bdc706739?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "img2": "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXBhcnRtZW50JTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D",
        "img3": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFwYXJ0bWVudCUyMGludGVyaW9yfGVufDB8fDB8fHww",
        "img4": "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGFwYXJ0bWVudCUyMGludGVyaW9yfGVufDB8fDB8fHww",
        "img5": "https://images.unsplash.com/photo-1524549207884-e7d1130ae2f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXBhcnRtZW50JTIwYmFsY29ueXxlbnwwfHwwfHx8MA%3D%3D",
        "img6": "https://images.unsplash.com/photo-1538430224529-7eceed6ab252?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGFwYXJ0bWVudCUyMGJhdGhyb29tfGVufDB8fDB8fHww",
        "img7": "https://images.unsplash.com/photo-1613013441633-785518cf90b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJhbGNvbnl8ZW58MHx8MHx8fDA%3D" 
      },
      "price": "$8000",
      "location": {
        "city": "Sunset",
        "state": "DDD",
        "streetName": "Sunset Boulevard"
      },
      "description": "Apartment with stunning sunset views and modern amenities. The apartment showcases contemporary architectural design, blending seamlessly with the urban landscape. Large windows allow natural light to flood the living spaces, offering panoramic views of the city skyline. Clean lines, sleek finishes, and thoughtful layouts create a stylish and inviting atmosphere.",
      "bedrooms": "2",
      "bathrooms": "2"
    },
    {
      "id": "5",
      "name": "Harbor Haven",
      "image": {
        "mainImg": "https://images.unsplash.com/photo-1659870525989-04899a2461c5?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "img2": "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXBhcnRtZW50JTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D",
        "img3": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFwYXJ0bWVudCUyMGludGVyaW9yfGVufDB8fDB8fHww",
        "img4": "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGFwYXJ0bWVudCUyMGludGVyaW9yfGVufDB8fDB8fHww",
        "img5": "https://images.unsplash.com/photo-1524549207884-e7d1130ae2f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXBhcnRtZW50JTIwYmFsY29ueXxlbnwwfHwwfHx8MA%3D%3D",
        "img6": "https://images.unsplash.com/photo-1538430224529-7eceed6ab252?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGFwYXJ0bWVudCUyMGJhdGhyb29tfGVufDB8fDB8fHww",
        "img7": "https://images.unsplash.com/photo-1613013441633-785518cf90b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJhbGNvbnl8ZW58MHx8MHx8fDA%3D" 
      },
      "price": "$9200",
      "location": {
        "city": "Harbor City",
        "state": "EEE",
        "streetName": "Harbor Drive"
      },
      "description": "Waterfront apartment with panoramic views of the harbor. The apartment showcases contemporary architectural design, blending seamlessly with the urban landscape. Large windows allow natural light to flood the living spaces, offering panoramic views of the city skyline. Clean lines, sleek finishes, and thoughtful layouts create a stylish and inviting atmosphere.",
      "bedrooms": "3",
      "bathrooms": "2"
    },
    {
      "id": "6",
      "name": "Meadow Residences",
      "image": {
        "mainImg": "https://images.unsplash.com/photo-1597047084897-51e81819a499?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "img2": "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXBhcnRtZW50JTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D",
        "img3": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFwYXJ0bWVudCUyMGludGVyaW9yfGVufDB8fDB8fHww",
        "img4": "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGFwYXJ0bWVudCUyMGludGVyaW9yfGVufDB8fDB8fHww",
        "img5": "https://images.unsplash.com/photo-1524549207884-e7d1130ae2f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXBhcnRtZW50JTIwYmFsY29ueXxlbnwwfHwwfHx8MA%3D%3D",
        "img6": "https://images.unsplash.com/photo-1538430224529-7eceed6ab252?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGFwYXJ0bWVudCUyMGJhdGhyb29tfGVufDB8fDB8fHww",
        "img7": "https://images.unsplash.com/photo-1613013441633-785518cf90b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJhbGNvbnl8ZW58MHx8MHx8fDA%3D" 
      },
      "price": "$8700",
      "location": {
        "city": "Greenfield",
        "state": "FFF",
        "streetName": "Meadow Lane"
      },
      "description": "Serenely located apartment surrounded by lush meadows. The apartment showcases contemporary architectural design, blending seamlessly with the urban landscape. Large windows allow natural light to flood the living spaces, offering panoramic views of the city skyline. Clean lines, sleek finishes, and thoughtful layouts create a stylish and inviting atmosphere.",
      "bedrooms": "2",
      "bathrooms": "2"
    },
    {
      "id": "7",
      "name": "Urban Loft",
      "image": {
        "mainImg": "https://images.unsplash.com/photo-1585641428364-97b2284664d2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "img2": "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXBhcnRtZW50JTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D",
        "img3": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFwYXJ0bWVudCUyMGludGVyaW9yfGVufDB8fDB8fHww",
        "img4": "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGFwYXJ0bWVudCUyMGludGVyaW9yfGVufDB8fDB8fHww",
        "img5": "https://images.unsplash.com/photo-1524549207884-e7d1130ae2f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXBhcnRtZW50JTIwYmFsY29ueXxlbnwwfHwwfHx8MA%3D%3D",
        "img6": "https://images.unsplash.com/photo-1538430224529-7eceed6ab252?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGFwYXJ0bWVudCUyMGJhdGhyb29tfGVufDB8fDB8fHww",
        "img7": "https://images.unsplash.com/photo-1613013441633-785518cf90b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJhbGNvbnl8ZW58MHx8MHx8fDA%3D" 
      },
      "price": "$8800",
      "location": {
        "city": "Cityscape",
        "state": "GGG",
        "streetName": "Highrise Avenue"
      },
      "description": "Chic loft-style apartment in the bustling urban landscape. The apartment showcases contemporary architectural design, blending seamlessly with the urban landscape. Large windows allow natural light to flood the living spaces, offering panoramic views of the city skyline. Clean lines, sleek finishes, and thoughtful layouts create a stylish and inviting atmosphere.",
      "bedrooms": "1",
      "bathrooms": "1"
    },
    {
      "id": "8",
      "name": "Riverside Retreat",
      "image": {
        "mainImg": "https://images.unsplash.com/photo-1524234599372-a5bd0194758d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "img2": "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXBhcnRtZW50JTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D",
        "img3": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFwYXJ0bWVudCUyMGludGVyaW9yfGVufDB8fDB8fHww",
        "img4": "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGFwYXJ0bWVudCUyMGludGVyaW9yfGVufDB8fDB8fHww",
        "img5": "https://images.unsplash.com/photo-1524549207884-e7d1130ae2f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXBhcnRtZW50JTIwYmFsY29ueXxlbnwwfHwwfHx8MA%3D%3D",
        "img6": "https://images.unsplash.com/photo-1538430224529-7eceed6ab252?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGFwYXJ0bWVudCUyMGJhdGhyb29tfGVufDB8fDB8fHww",
        "img7": "https://images.unsplash.com/photo-1613013441633-785518cf90b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJhbGNvbnl8ZW58MHx8MHx8fDA%3D" 
      },
      "price": "$9100",
      "location": {
        "city": "Riverside",
        "state": "HHH",
        "streetName": "Riverwalk Street"
      },
      "description": "Tranquil apartment with a riverside view and nature trails. The apartment showcases contemporary architectural design, blending seamlessly with the urban landscape. Large windows allow natural light to flood the living spaces, offering panoramic views of the city skyline. Clean lines, sleek finishes, and thoughtful layouts create a stylish and inviting atmosphere.",
      "bedrooms": "4",
      "bathrooms": "3"
    },
    {
      "id": "9",
      "name": "Sunny Skies Apartments",
      "image": {
        "mainImg": "https://images.unsplash.com/photo-1624204386084-dd8c05e32226?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "img2": "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXBhcnRtZW50JTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D",
        "img3": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFwYXJ0bWVudCUyMGludGVyaW9yfGVufDB8fDB8fHww",
        "img4": "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGFwYXJ0bWVudCUyMGludGVyaW9yfGVufDB8fDB8fHww",
        "img5": "https://images.unsplash.com/photo-1524549207884-e7d1130ae2f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXBhcnRtZW50JTIwYmFsY29ueXxlbnwwfHwwfHx8MA%3D%3D",
        "img6": "https://images.unsplash.com/photo-1538430224529-7eceed6ab252?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGFwYXJ0bWVudCUyMGJhdGhyb29tfGVufDB8fDB8fHww",
        "img7": "https://images.unsplash.com/photo-1613013441633-785518cf90b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJhbGNvbnl8ZW58MHx8MHx8fDA%3D" 
      },
      "price": "$8300",
      "location": {
        "city": "Sunnyville",
        "state": "III",
        "streetName": "Sunshine Lane"
      },
      "description": "Bright and airy apartment with abundant natural light. The apartment showcases contemporary architectural design, blending seamlessly with the urban landscape. Large windows allow natural light to flood the living spaces, offering panoramic views of the city skyline. Clean lines, sleek finishes, and thoughtful layouts create a stylish and inviting atmosphere.",
      "bedrooms": "2",
      "bathrooms": "2"
    },
    {
      "id": "10",
      "name": "Mountain View Residences",
      "image": {
        "mainImg": "https://images.unsplash.com/photo-1597592831360-52f772edb718?q=80&w=2050&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "img2": "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXBhcnRtZW50JTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D",
        "img3": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFwYXJ0bWVudCUyMGludGVyaW9yfGVufDB8fDB8fHww",
        "img4": "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGFwYXJ0bWVudCUyMGludGVyaW9yfGVufDB8fDB8fHww",
        "img5": "https://images.unsplash.com/photo-1524549207884-e7d1130ae2f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXBhcnRtZW50JTIwYmFsY29ueXxlbnwwfHwwfHx8MA%3D%3D",
        "img6": "https://images.unsplash.com/photo-1538430224529-7eceed6ab252?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGFwYXJ0bWVudCUyMGJhdGhyb29tfGVufDB8fDB8fHww",
        "img7": "https://images.unsplash.com/photo-1613013441633-785518cf90b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJhbGNvbnl8ZW58MHx8MHx8fDA%3D" 
      },
      "price": "$9200",
      "location": {
        "city": "Mountain Town",
        "state": "JJJ",
        "streetName": "Summit Road"
      },
      "description": "Elevated living with panoramic mountain views. The apartment showcases contemporary architectural design, blending seamlessly with the urban landscape. Large windows allow natural light to flood the living spaces, offering panoramic views of the city skyline. Clean lines, sleek finishes, and thoughtful layouts create a stylish and inviting atmosphere.",
      "bedrooms": "3",
      "bathrooms": "2"
    },
    {
      "id": "11",
      "name": "Golden Tower Apartments",
      "image": {
        "mainImg": "https://images.unsplash.com/photo-1563804951772-db97f4cfaf82?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "img2": "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXBhcnRtZW50JTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D",
        "img3": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFwYXJ0bWVudCUyMGludGVyaW9yfGVufDB8fDB8fHww",
        "img4": "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGFwYXJ0bWVudCUyMGludGVyaW9yfGVufDB8fDB8fHww",
        "img5": "https://images.unsplash.com/photo-1524549207884-e7d1130ae2f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXBhcnRtZW50JTIwYmFsY29ueXxlbnwwfHwwfHx8MA%3D%3D",
        "img6": "https://images.unsplash.com/photo-1538430224529-7eceed6ab252?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGFwYXJ0bWVudCUyMGJhdGhyb29tfGVufDB8fDB8fHww",
        "img7": "https://images.unsplash.com/photo-1613013441633-785518cf90b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJhbGNvbnl8ZW58MHx8MHx8fDA%3D" 
      },
      "price": "$8900",
      "location": {
        "city": "Golden City",
        "state": "KKK",
        "streetName": "Golden Gate Street"
      },
      "description": "Luxury living with iconic views of the Golden Gate Bridge. The apartment showcases contemporary architectural design, blending seamlessly with the urban landscape. Large windows allow natural light to flood the living spaces, offering panoramic views of the city skyline. Clean lines, sleek finishes, and thoughtful layouts create a stylish and inviting atmosphere.",
      "bedrooms": "2",
      "bathrooms": "2"
    },
    {
      "id": "12",
      "name": "Seaside Haven",
      "image": {
        "mainImg": "https://images.unsplash.com/photo-1528772822659-a1701f579ef1?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "img2": "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXBhcnRtZW50JTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D",
        "img3": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFwYXJ0bWVudCUyMGludGVyaW9yfGVufDB8fDB8fHww",
        "img4": "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGFwYXJ0bWVudCUyMGludGVyaW9yfGVufDB8fDB8fHww",
        "img5": "https://images.unsplash.com/photo-1524549207884-e7d1130ae2f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXBhcnRtZW50JTIwYmFsY29ueXxlbnwwfHwwfHx8MA%3D%3D",
        "img6": "https://images.unsplash.com/photo-1538430224529-7eceed6ab252?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGFwYXJ0bWVudCUyMGJhdGhyb29tfGVufDB8fDB8fHww",
        "img7": "https://images.unsplash.com/photo-1613013441633-785518cf90b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJhbGNvbnl8ZW58MHx8MHx8fDA%3D" 
      },
      "price": "$9400",
      "location": {
        "city": "Seaside",
        "state": "LLL",
        "streetName": "Oceanfront Drive"
      },
      "description": "Coastal apartment with breathtaking views of the ocean. The apartment showcases contemporary architectural design, blending seamlessly with the urban landscape. Large windows allow natural light to flood the living spaces, offering panoramic views of the city skyline. Clean lines, sleek finishes, and thoughtful layouts create a stylish and inviting atmosphere.",
      "bedrooms": "4",
      "bathrooms": "3"
    },
    {
      "id": "13",
      "name": "Penthouse Paradise",
      "image": {
        "mainImg": "https://images.unsplash.com/photo-1612853117692-5dd289602ce0?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "img2": "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXBhcnRtZW50JTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D",
        "img3": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFwYXJ0bWVudCUyMGludGVyaW9yfGVufDB8fDB8fHww",
        "img4": "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGFwYXJ0bWVudCUyMGludGVyaW9yfGVufDB8fDB8fHww",
        "img5": "https://images.unsplash.com/photo-1524549207884-e7d1130ae2f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXBhcnRtZW50JTIwYmFsY29ueXxlbnwwfHwwfHx8MA%3D%3D",
        "img6": "https://images.unsplash.com/photo-1538430224529-7eceed6ab252?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGFwYXJ0bWVudCUyMGJhdGhyb29tfGVufDB8fDB8fHww",
        "img7": "https://images.unsplash.com/photo-1613013441633-785518cf90b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJhbGNvbnl8ZW58MHx8MHx8fDA%3D" 
      },
      "price": "$9800",
      "location": {
        "city": "Skyline City",
        "state": "MMM",
        "streetName": "Penthouse Avenue"
      },
      "description": "Exclusive penthouse with panoramic cityscape views. The apartment showcases contemporary architectural design, blending seamlessly with the urban landscape. Large windows allow natural light to flood the living spaces, offering panoramic views of the city skyline. Clean lines, sleek finishes, and thoughtful layouts create a stylish and inviting atmosphere.",
      "bedrooms": "5",
      "bathrooms": "4"
    },
    {
      "id": "14",
      "name": "Garden Grove Apartments",
      "image": {
        "mainImg": "https://images.unsplash.com/photo-1628878686078-1320399a8f23?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "img2": "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXBhcnRtZW50JTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D",
        "img3": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFwYXJ0bWVudCUyMGludGVyaW9yfGVufDB8fDB8fHww",
        "img4": "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGFwYXJ0bWVudCUyMGludGVyaW9yfGVufDB8fDB8fHww",
        "img5": "https://images.unsplash.com/photo-1524549207884-e7d1130ae2f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXBhcnRtZW50JTIwYmFsY29ueXxlbnwwfHwwfHx8MA%3D%3D",
        "img6": "https://images.unsplash.com/photo-1538430224529-7eceed6ab252?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGFwYXJ0bWVudCUyMGJhdGhyb29tfGVufDB8fDB8fHww",
        "img7": "https://images.unsplash.com/photo-1613013441633-785518cf90b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJhbGNvbnl8ZW58MHx8MHx8fDA%3D" 
      },
      "price": "$8600",
      "location": {
        "city": "Garden City",
        "state": "NNN",
        "streetName": "Blossom Lane"
      },
      "description": "Apartments surrounded by lush gardens and tranquil surroundings. The apartment showcases contemporary architectural design, blending seamlessly with the urban landscape. Large windows allow natural light to flood the living spaces, offering panoramic views of the city skyline. Clean lines, sleek finishes, and thoughtful layouts create a stylish and inviting atmosphere.",
      "bedrooms": "3",
      "bathrooms": "2"
    },
    {
      "id": "15",
      "name": "Lakeview Retreat",
      "image": {
        "mainImg": "https://images.unsplash.com/photo-1669393140594-354010d8df73?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "img2": "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXBhcnRtZW50JTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D",
        "img3": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFwYXJ0bWVudCUyMGludGVyaW9yfGVufDB8fDB8fHww",
        "img4": "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGFwYXJ0bWVudCUyMGludGVyaW9yfGVufDB8fDB8fHww",
        "img5": "https://images.unsplash.com/photo-1524549207884-e7d1130ae2f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXBhcnRtZW50JTIwYmFsY29ueXxlbnwwfHwwfHx8MA%3D%3D",
        "img6": "https://images.unsplash.com/photo-1538430224529-7eceed6ab252?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGFwYXJ0bWVudCUyMGJhdGhyb29tfGVufDB8fDB8fHww",
        "img7": "https://images.unsplash.com/photo-1613013441633-785518cf90b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJhbGNvbnl8ZW58MHx8MHx8fDA%3D" 
      },
      "price": "$9300",
      "location": {
        "city": "Lakeville",
        "state": "OOO",
        "streetName": "Lakeshore Drive"
      },
      "description": "Scenic views of the lake from this charming lakeside retreat. The apartment showcases contemporary architectural design, blending seamlessly with the urban landscape. Large windows allow natural light to flood the living spaces, offering panoramic views of the city skyline. Clean lines, sleek finishes, and thoughtful layouts create a stylish and inviting atmosphere.",
      "bedrooms": "2",
      "bathrooms": "2"
    },
    {
      "id": "16",
      "name": "Countryside Haven",
      "image": {
        "mainImg": "https://images.unsplash.com/photo-1580041065738-e72023775cdc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "img2": "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXBhcnRtZW50JTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D",
        "img3": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFwYXJ0bWVudCUyMGludGVyaW9yfGVufDB8fDB8fHww",
        "img4": "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGFwYXJ0bWVudCUyMGludGVyaW9yfGVufDB8fDB8fHww",
        "img5": "https://images.unsplash.com/photo-1524549207884-e7d1130ae2f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXBhcnRtZW50JTIwYmFsY29ueXxlbnwwfHwwfHx8MA%3D%3D",
        "img6": "https://images.unsplash.com/photo-1538430224529-7eceed6ab252?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGFwYXJ0bWVudCUyMGJhdGhyb29tfGVufDB8fDB8fHww",
        "img7": "https://images.unsplash.com/photo-1613013441633-785518cf90b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJhbGNvbnl8ZW58MHx8MHx8fDA%3D" 
      },
      "price": "$8700",
      "location": {
        "city": "Country Town",
        "state": "PPP",
        "streetName": "Meadowview Lane"
      },
      "description": "Peaceful living in the heart of the countryside. The apartment showcases contemporary architectural design, blending seamlessly with the urban landscape. Large windows allow natural light to flood the living spaces, offering panoramic views of the city skyline. Clean lines, sleek finishes, and thoughtful layouts create a stylish and inviting atmosphere.",
      "bedrooms": "3",
      "bathrooms": "2"
    },
    {
      "id": "17",
      "name": "City Lights Condos",
      "image": {
        "mainImg": "https://images.unsplash.com/photo-1600104786045-7a3f98ae23a7?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "img2": "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXBhcnRtZW50JTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D",
        "img3": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFwYXJ0bWVudCUyMGludGVyaW9yfGVufDB8fDB8fHww",
        "img4": "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGFwYXJ0bWVudCUyMGludGVyaW9yfGVufDB8fDB8fHww",
        "img5": "https://images.unsplash.com/photo-1524549207884-e7d1130ae2f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXBhcnRtZW50JTIwYmFsY29ueXxlbnwwfHwwfHx8MA%3D%3D",
        "img6": "https://images.unsplash.com/photo-1538430224529-7eceed6ab252?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGFwYXJ0bWVudCUyMGJhdGhyb29tfGVufDB8fDB8fHww" ,
        "img7": "https://images.unsplash.com/photo-1613013441633-785518cf90b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJhbGNvbnl8ZW58MHx8MHx8fDA%3D"
      },
      "price": "$9200",
      "location": {
        "city": "Cityscape",
        "state": "QQQ",
        "streetName": "Skyline Boulevard"
      },
      "description": "Condos with mesmerizing views of the city lights at night. The apartment showcases contemporary architectural design, blending seamlessly with the urban landscape. Large windows allow natural light to flood the living spaces, offering panoramic views of the city skyline. Clean lines, sleek finishes, and thoughtful layouts create a stylish and inviting atmosphere.",
      "bedrooms": "2",
      "bathrooms": "2"
    },
    {
      "id": "18",
      "name": "Majestic Manor",
      "image": {
        "mainImg": "https://images.unsplash.com/photo-1561321698-40ae82a47b9e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "img2": "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXBhcnRtZW50JTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D",
        "img3": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFwYXJ0bWVudCUyMGludGVyaW9yfGVufDB8fDB8fHww",
        "img4": "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGFwYXJ0bWVudCUyMGludGVyaW9yfGVufDB8fDB8fHww",
        "img5": "https://images.unsplash.com/photo-1524549207884-e7d1130ae2f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXBhcnRtZW50JTIwYmFsY29ueXxlbnwwfHwwfHx8MA%3D%3D",
        "img6": "https://images.unsplash.com/photo-1538430224529-7eceed6ab252?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGFwYXJ0bWVudCUyMGJhdGhyb29tfGVufDB8fDB8fHww",
        "img7": "https://images.unsplash.com/photo-1613013441633-785518cf90b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJhbGNvbnl8ZW58MHx8MHx8fDA%3D" 
      },
      "price": "$9600",
      "location": {
        "city": "Royal City",
        "state": "RRR",
        "streetName": "Regal Street"
      },
      "description": "Live like royalty in this majestic and opulent manor. The apartment showcases contemporary architectural design, blending seamlessly with the urban landscape. Large windows allow natural light to flood the living spaces, offering panoramic views of the city skyline. Clean lines, sleek finishes, and thoughtful layouts create a stylish and inviting atmosphere.",
      "bedrooms": "4",
      "bathrooms": "3"
    },
    {
      "id": "19",
      "name": "Parkside Plaza",
      "image": {
        "mainImg": "https://images.unsplash.com/photo-1677747354829-a5d89cd8048c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "img2": "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXBhcnRtZW50JTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D",
        "img3": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFwYXJ0bWVudCUyMGludGVyaW9yfGVufDB8fDB8fHww",
        "img4": "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGFwYXJ0bWVudCUyMGludGVyaW9yfGVufDB8fDB8fHww",
        "img5": "https://images.unsplash.com/photo-1524549207884-e7d1130ae2f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXBhcnRtZW50JTIwYmFsY29ueXxlbnwwfHwwfHx8MA%3D%3D",
        "img6": "https://images.unsplash.com/photo-1538430224529-7eceed6ab252?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGFwYXJ0bWVudCUyMGJhdGhyb29tfGVufDB8fDB8fHww",
        "img7": "https://images.unsplash.com/photo-1613013441633-785518cf90b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJhbGNvbnl8ZW58MHx8MHx8fDA%3D"
      },
      "price": "$8900",
      "location": {
        "city": "Park City",
        "state": "SSS",
        "streetName": "Parkway Avenue"
      },
      "description": "Modern apartments with a parkside view and recreational facilities. The apartment showcases contemporary architectural design, blending seamlessly with the urban landscape. Large windows allow natural light to flood the living spaces, offering panoramic views of the city skyline. Clean lines, sleek finishes, and thoughtful layouts create a stylish and inviting atmosphere.",
      "bedrooms": "3",
      "bathrooms": "2"
    },
  ];

router.get('/', function(req, res, next) {
  res.json({
    data: dataArray
  });
  
});

router.get('/:id', function(req, res, next) {
  const apartmentId = req.params.id;
  const apartment = dataArray.find(apart => apart.id === apartmentId);

  if (apartment) {
    res.json({
      data: apartment
    });
  } else {
    res.status(404).json({
      error: 'Apartment not found'
    });
  }
});

module.exports = router;
