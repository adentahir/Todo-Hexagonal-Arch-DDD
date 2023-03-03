"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const authRouter = express.Router();
const auth = require('./auth');
const createError = require('http-errors');
authRouter.get('/idx', (req, res) => {
    res.send('Hello World!');
});
authRouter.use('/auth', auth);
authRouter.use((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    next(createError.NotFound('Route not Found'));
}));
authRouter.use((req, res, next) => {
    res.status(500).json({
        status: false,
        message: 'Internal Server Error'
    });
});
exports.default = authRouter;
