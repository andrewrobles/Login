# How to run project for the first time
1. Verify `Python` and `Node` are installed
2. Make all the scripts executable
```bash
chmod +x setup.sh
chmod +x test.sh
```
3. Install required dependencies
```
./setup.sh
```
4. Verify tests run correctly
```
./test.sh
```
5. Start backend
```
source backend/venv/bin/activate
python3 backend/manage.py runserver
```
6. Start frontend
```
cd frontend && npm run start
```