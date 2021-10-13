# React frontend
cd frontend
npm install
cd ..

# Django backend
cd backend
python3 -m venv venv
source venv/bin/activate
pip3 install -r requirements.txt
python3 manage.py migrate
cd ..