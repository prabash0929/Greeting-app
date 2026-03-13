from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

# Home Page
@app.route('/')
def index():
    return render_template('index.html')

# POST Request
@app.route('/greet', methods=['POST'])
def greet():
    name = request.form['username']
    return redirect(url_for('hello', name=name))

# GET Request
@app.route('/hello')
def hello():
    name = request.args.get('name')
    return render_template('hello.html', name=name)

if __name__ == '__main__':
    app.run(debug=True)