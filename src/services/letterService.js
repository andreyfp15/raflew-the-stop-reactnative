import db from "../infra/SQLiteDatabase";

db.transaction((tx) => {
  //<<<<<<<<<<<<<<<<<<<<<<<< USE ISSO APENAS DURANTE OS TESTES!!! >>>>>>>>>>>>>>>>>>>>>>>
  //tx.executeSql("DROP TABLE letters;");
  //<<<<<<<<<<<<<<<<<<<<<<<< USE ISSO APENAS DURANTE OS TESTES!!! >>>>>>>>>>>>>>>>>>>>>>>

  tx.executeSql(
    "CREATE TABLE IF NOT EXISTS letters (id INTEGER PRIMARY KEY AUTOINCREMENT, letter TEXT);"
  );
});

const create = (obj) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql("INSERT INTO letters (letter) values (?);", [obj.letter],
        (_, { rowsAffected, insertId }) => {
          if (rowsAffected > 0) 
            resolve(insertId);
          else 
            reject("Error inserting obj: " + JSON.stringify(obj));
        },
        (_, error) => reject(error)
      );
    });
  });
};

const update = (id, obj) => {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql("UPDATE cars SET letter=? WHERE id=?;", [obj.letter, id],
          (_, { rowsAffected }) => {
            if (rowsAffected > 0) 
                resolve(rowsAffected);
            else 
                reject("Error updating obj: id=" + id);
          },
          (_, error) => reject(error)
        );
      });
    });
  };

const find = (id) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM letters WHERE id=?;", [id],
        (_, { rows }) => {
          if (rows.length > 0) 
            resolve(rows._array[0]);
          else 
            reject("Obj not found: id=" + id); 
        },
        (_, error) => reject(error)
      );
    });
  });
};

const findByLetter = (letter) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql("SELECT * FROM letters WHERE letter LIKE ?;", [letter],
        (_, { rows }) => {
            if (rows.length > 0) 
                resolve(rows._array);
            else 
                reject("Obj not found: letter=" + letter);
        },
        (_, error) => reject(error)
      );
    });
  });
};

const all = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql("SELECT * FROM letters;",[],
        (_, { rows }) => resolve(rows._array),
        (_, error) => reject(error)
      );
    });
  });
};

const remove = (id) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql("DELETE FROM letters WHERE id=?;",[id],
        (_, { rowsAffected }) => {resolve(rowsAffected); },
        (_, error) => reject(error)
      );
    });
  });
};

const removeAll = (id) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql("DELETE FROM letters;",[],
        (_, { rowsAffected }) => {resolve(rowsAffected); },
        (_, error) => reject(error)
      );
    });
  });
};

const allList = () => {
  db.executeSql("SELECT * FROM letters;", [], (trans, results) => {
    resolve(trans);
    return results;
  },
    (error) => {
    console.log("execute error: " + JSON.stringify(error))
    reject(error);
  });
};

// //create
// Car.create( {brand:'vw', model:'brasilia', hp:65} )
// .then( id => console.log('Car created with id: '+ id) )
// .catch( err => console.log(err) )

export default {
  create,
  update,
  find,
  findByLetter,
  all,
  remove,
  removeAll,
  allList
};