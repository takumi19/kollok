const express = require('express');
const app = express();
const PORT = 3000;

// Для примера используется хранение данных в памяти
let projects = [];

app.use(express.json());

// GET /projects: Получение списка всех проектов
app.get('/projects', (req, res) => {
  res.json(projects);
});

// POST /projects: Создание нового проекта
app.post('/projects', (req, res) => {
  const newProject = {
    id: Date.now().toString(), // Генерируем уникальный ID
    name: req.body.name,
    description: req.body.description,
    deadline: req.body.deadline,
    participants: req.body.participants
  };

  projects.push(newProject);

  res.status(201).json(newProject);
});

// GET /projects/{id}: Получение информации о конкретном проекте
app.get('/projects/:id', (req, res) => {
  const projectId = req.params.id;
  const project = projects.find(p => p.id === projectId);

  if (!project) {
    res.status(404).json({ error: 'Project not found' });
    return;
  }

  res.json(project);
});

// PUT /projects/{id}: Обновление информации о проекте
app.put('/projects/:id', (req, res) => {
  const projectId = req.params.id;
  const project = projects.find(p => p.id === projectId);

  if (!project) {
    res.status(404).json({ error: 'Project not found' });
    return;
  }

  project.name = req.body.name || project.name;
  project.description = req.body.description || project.description;
  project.deadline = req.body.deadline || project.deadline;
  project.participants = req.body.participants || project.participants;

  res.json(project);
});

// DELETE /projects/{id}: Удаление проекта
app.delete('/projects/:id', (req, res) => {
  const projectId = req.params.id;
  const projectIndex = projects.findIndex(p => p.id === projectId);

  if (projectIndex === -1) {
    res.status(404).json({ error: 'Project not found' });
    return;
  }

  const deletedProject = projects.splice(projectIndex, 1)[0];

  res.json(deletedProject);
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
  