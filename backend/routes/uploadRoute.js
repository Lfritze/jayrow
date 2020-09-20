import express from 'express';
import multer from 'multer';

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/')
  }
})