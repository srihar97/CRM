from flask import Blueprint, request, jsonify
from models import User, Project, Feedback, db

api = Blueprint('api', __name__)

@api.route('/register', methods=['POST'])
def register():
    data = request.json
    new_user = User(username=data['username'], password=data['password'], role=data['role'])
    db.session.add(new_user)
    db.session.commit()
    return jsonify({"message": "User registered successfully!"}), 201

@api.route('/projects', methods=['POST'])
def create_project():
    data = request.json
    new_project = Project(name=data['name'], status='ongoing')
    db.session.add(new_project)
    db.session.commit()
    return jsonify({"message": "Project created successfully!"}), 201

@api.route('/feedback', methods=['POST'])
def add_feedback():
    data = request.json
    new_feedback = Feedback(content=data['content'], project_id=data['project_id'])
    db.session.add(new_feedback)
    db.session.commit()
    return jsonify({"message": "Feedback added successfully!"}), 201
