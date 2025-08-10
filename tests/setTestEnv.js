if(!process.env.POSTGRES_URI){
    process.env.POSTGRES_URI = 'postgresql://app:123456@localhost:5435/db';
}