# No DB Project

## Front-end checklist:

- package.json
  - main --> server/
  - proxy --> http://localhost:4000
- reset.css
- colors located --> http://christinadob.com/todo/media

### Folder Structure

- src/
  - App.js
  - index.js
  - components/
    - Header/
      - Header.js
      - Header.css
    - ColorList/ ??
      - ColorList.js ??
      - ColorList.css ??
    - Companies/
      - Companies.js
      - Companies.css
    - FavColorInput/ ??
      - FaveColorInput.js ??
      - FavColorInput.css ??
    - UserFavorites/
      - UserFavorites.js
      - UserFavorites.css
    - ReactStars/
      - ReactStars.js
      - ReactStars.css

## ** NEED TO KNOW WHAT COMPONENTS NEED TO BE MADE ?? **

### dependencies

- `axios`
- `ReactStars from 'react-stars'`

### Back-end Checklist

### Folder structure

- server/
  - index.js
  - controller/
    - lipController.js
  - data
    - data.json

### Endpoints

Get: ( get all colors ) `/api/colors` ??

Post: ( add a fav color ) `/api/colors` ??

Put: ( edit in favorites ) `/api/colors/:id` ??

Delete: ( delete items in favorites ) `/api/colors/:id` ??

## ** NEED TO KNOW WHAT ENDPOINTS ARE DOING ?? **

```js
{
  id, name, img_path;
}
```

### dependencies

- express
- body-parser
