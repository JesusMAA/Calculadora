from flask import Blueprint, render_template, abort
from jinja2 import TemplateNotFound

pagina_calculadora = Blueprint('pagina_calculadora',__name__, template_folder='templates', static_folder='static')

@pagina_calculadora.route('/')
@pagina_calculadora.route('/inicio')
@pagina_calculadora.route('/<string:aux>')
def index(aux=None):
    return render_template('index.html')
    