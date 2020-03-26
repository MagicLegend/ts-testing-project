import { createServer } from 'http';
import app from './app';
import {sequelize} from './seq';
import A from './models/A';
import T from './models/T';

const port = process.env.PORT || 3001;

(async () => {
    sequelize.addModels([A, T]);
    await sequelize.sync({ force: true });

    createServer(app)
        .listen(
            port,
            () => console.log(`Server running on port ${port}`),
        );
})();
