import env from '../../../.env';
import JSONP from './JSONP';

export function getResultsByTag(tag) {
  const url = `https://api.instagram.com/v1/tags/${encodeURIComponent(tag)}/media/recent?client_id=${env.CLIENT_ID}`;
  return getResultsByUrl(url);
}

export function getResultsByUrl(url) {
  return JSONP(url);
}