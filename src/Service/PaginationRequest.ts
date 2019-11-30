import express from 'express';

export default interface PaginationRequest extends express.Request {
    query: {
        page: string,
        limit: string
    }
}