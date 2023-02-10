"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reqParamsMiddleware = void 0;
function reqParamsMiddleware() {
    return (req, res, next) => {
        const reqParams = {
            id: typeof req.query.id === 'string' ? req.query.id : undefined,
            conferencePath: typeof req.query.conference === 'string' ? req.query.conference : undefined,
            seasonPath: typeof req.query.season === 'string' ? req.query.season : undefined,
            yearPath: typeof req.query.year === 'string' ? req.query.year : undefined,
            albumId: typeof req.query.albumId === 'string' ? req.query.albumId : undefined,
            folder: typeof req.query.folder === 'string' ? req.query.folder : undefined,
            groupId: typeof req.query.groupId === 'string' ? req.query.groupId : undefined
        };
        res.locals.params = reqParams;
        next();
    };
}
exports.reqParamsMiddleware = reqParamsMiddleware;
