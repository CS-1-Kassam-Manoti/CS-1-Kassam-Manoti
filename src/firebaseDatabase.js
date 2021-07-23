import firebase from './firebase';
import { database } from './firebase';

const db = database.ref('/blogs')

class BlogDataService {
    getAll() {
      return db;
    }
  
    create(blog) {
      return db.push(blog);
    }
  
    update(key, value) {
      return db.child(key).update(value);
    }
  
    delete(key) {
      return db.child(key).remove();
    }
  
    deleteAll() {
      return db.remove();
    }
  }
  
  export default new BlogDataService();