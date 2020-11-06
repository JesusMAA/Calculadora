from flask import Flask
from .calcula import url as cal

app = Flask(__name__)

app.register_blueprint(cal.pagina_calculadora)