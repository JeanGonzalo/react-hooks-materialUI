import { put, call, takeLatest } from 'redux-saga/effects';
import { SEARCH_MOVIE_START, SEARCH_MOVIE_ERROR, SEARCH_MOVIE_COMPLETE } from '../../consts/actionTypes'

export function* searchMovie({ payload }) {
    try {

    } catch (e) {

    }
}

export default function* search() {
    yield takeLatest(SEARCH_MOVIE_START, searchMovie);
}   