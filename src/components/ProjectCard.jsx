import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export default function ProjectCard({ project }) {
  return (
    <Card>
      <Card.Img variant="top" src={project.image} />
      <Card.Body>
        <Card.Title>{project.title}</Card.Title>
        <Card.Text>{project.description.slice(0, 100)}...</Card.Text>
        <Link to={`/project/${project.id}`}>
          <Button variant="primary">View Project</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};
