const cors = require("cors");
const app = express();

const useCors = ({ url }) => {
    app.use(cors({origin: {url}, credentials: true}))
}

export default useCors;