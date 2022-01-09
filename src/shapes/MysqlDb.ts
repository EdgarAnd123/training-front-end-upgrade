import DbConnectionInterface from "./DbConnectionInterface";

class MysqlDb implements DbConnectionInterface {
    connect() {
        return 'Connecting to MySQL...';
    }
}

export default MysqlDb;