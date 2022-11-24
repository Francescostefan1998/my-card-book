import { propTypes } from "react-bootstrap/esm/Image"
import { Badge } from "react-bootstrap"

const MyBadge = (prop) => (
    <h2 className={prop.classn}>
    <Badge variant="secondary">{prop.text}</Badge>
  </h2>
)

export default MyBadge
  /*fetch("https://striveschool-api.herokuapp.com/api/put-your-endpoint-here/", {
headers: {
"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzdmNWNmYWQ4MzkzNTAwMTVlOGM0YTUiLCJpYXQiOjE2NjkyOTEyNTksImV4cCI6MTY3MDUwMDg1OX0.R9fOcNdfbqF-E06umapRM0bFhO6l1qqyZMtvrBY5C4I"
}
})
*/