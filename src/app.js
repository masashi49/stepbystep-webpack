import cats from './cats';
import catsjson from 'json-loader!./cats.json';
//var catsyml = require('./catsyml');
import catsyml from './catsyml';

console.log(cats , catsjson , catsyml);


//requireで読み込んだ方がdistされたファイルが小さい。
//importはes2015の記述だから、一度何かに変換しているのか？