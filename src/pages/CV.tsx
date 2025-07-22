import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Globe,
  Download,
  Code,
  Database,
  Smartphone,
  Cloud,
  Briefcase,
  GraduationCap,
  Award,
  ExternalLink
} from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.jpg';

const CVPage = () => {
  const skills = {
    frontend: ['React', 'TypeScript', 'Vue.js', 'Angular', 'Tailwind CSS', 'SCSS'],
    backend: ['Node.js', 'Python', 'Java', 'PHP', 'Express.js', 'Django'],
    database: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Firebase'],
    tools: ['Git', 'Docker', 'AWS', 'Jenkins', 'Jest', 'Figma'],
    mobile: ['React Native', 'Flutter', 'iOS', 'Android']
  };

  const experiences = [
    {
      title: 'Développeur Full-Stack Senior',
      company: 'TechInnovate Solutions',
      period: '2022 - Présent',
      description: 'Développement d\'applications web complexes avec React et Node.js. Leadership technique d\'une équipe de 5 développeurs.',
      achievements: ['Amélioration des performances de 40%', 'Mise en place d\'une architecture microservices', 'Formation de 3 développeurs juniors']
    },
    {
      title: 'Développeur Frontend',
      company: 'StartupTech',
      period: '2020 - 2022',
      description: 'Création d\'interfaces utilisateur modernes et responsives. Collaboration étroite avec les équipes UX/UI.',
      achievements: ['Développement de 15+ composants réutilisables', 'Réduction du temps de chargement de 60%', 'Implémentation de tests automatisés']
    },
    {
      title: 'Développeur Junior',
      company: 'WebAgency Pro',
      period: '2019 - 2020',
      description: 'Développement de sites web et applications mobiles. Apprentissage des bonnes pratiques de développement.',
      achievements: ['Livraison de 20+ projets clients', 'Maîtrise de React et Vue.js', 'Obtention de certification AWS']
    }
  ];

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Plateforme e-commerce complète avec gestion des stocks, paiements et analytics.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      link: '#'
    },
    {
      title: 'Task Management App',
      description: 'Application de gestion de tâches collaborative avec notifications en temps réel.',
      tech: ['Vue.js', 'Socket.io', 'MongoDB', 'Express'],
      link: '#'
    },
    {
      title: 'AI Chat Assistant',
      description: 'Assistant conversationnel intelligent avec traitement du langage naturel.',
      tech: ['Python', 'OpenAI API', 'React', 'FastAPI'],
      link: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="cv-section bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-2xl">
              <img 
                src={profilePhoto} 
                alt="Photo de profil" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center md:text-left flex-1">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Alexandre Dubois</h1>
              <p className="text-xl md:text-2xl mb-6 opacity-90">Développeur Full-Stack Senior</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  <span>alex.dubois@email.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  <span>+33 6 12 34 56 78</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  <span>Paris, France</span>
                </div>
              </div>
              <div className="flex justify-center md:justify-start gap-4">
                <Button variant="secondary" size="sm">
                  <Github className="h-4 w-4 mr-2" />
                  GitHub
                </Button>
                <Button variant="secondary" size="sm">
                  <Linkedin className="h-4 w-4 mr-2" />
                  LinkedIn
                </Button>
                <Button variant="secondary" size="sm">
                  <Globe className="h-4 w-4 mr-2" />
                  Portfolio
                </Button>
              </div>
            </div>
            <Button className="bg-white text-primary hover:bg-gray-100">
              <Download className="h-4 w-4 mr-2" />
              Télécharger CV
            </Button>
          </div>
        </div>
      </header>

      {/* About */}
      <section className="cv-section">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-8 cv-gradient-text">À Propos</h2>
          <Card className="cv-card cv-hover-lift">
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Développeur passionné avec plus de 5 ans d'expérience dans la création d'applications web modernes 
                et scalables. Expert en React, Node.js et architectures cloud, je me spécialise dans le développement 
                d'solutions innovantes qui répondent aux besoins métier tout en offrant une expérience utilisateur 
                exceptionnelle. Toujours à l'affût des dernières technologies et best practices du développement.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills */}
      <section className="cv-section bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 cv-gradient-text">Compétences Techniques</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="cv-card cv-hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Code className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">Frontend</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.frontend.map((skill) => (
                    <Badge key={skill} variant="secondary" className="cv-skill-tag">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="cv-card cv-hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Database className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">Backend & Database</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[...skills.backend, ...skills.database].map((skill) => (
                    <Badge key={skill} variant="secondary" className="cv-skill-tag">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="cv-card cv-hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Cloud className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">Outils & Cloud</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[...skills.tools, ...skills.mobile].map((skill) => (
                    <Badge key={skill} variant="secondary" className="cv-skill-tag">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="cv-section">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 cv-gradient-text">Expérience Professionnelle</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="cv-timeline-item">
                <div className="cv-timeline-dot"></div>
                <Card className="cv-card cv-hover-lift">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-primary">{exp.title}</h3>
                        <p className="text-lg font-medium text-foreground">{exp.company}</p>
                      </div>
                      <Badge variant="outline" className="mt-2 md:mt-0">
                        <Briefcase className="h-3 w-3 mr-1" />
                        {exp.period}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm uppercase tracking-wide text-accent">Réalisations clés :</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <Award className="h-3 w-3 text-accent mt-1 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="cv-section bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 cv-gradient-text">Projets Notables</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="cv-card cv-hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-semibold text-primary">{project.title}</h3>
                    <Button variant="ghost" size="sm">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="cv-section">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 cv-gradient-text">Formation</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="cv-card cv-hover-lift">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <GraduationCap className="h-8 w-8 text-primary mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold">Master en Informatique</h3>
                    <p className="text-muted-foreground">Université Pierre et Marie Curie - Paris</p>
                    <Badge variant="outline" className="mt-2">2017 - 2019</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="cv-card cv-hover-lift">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <GraduationCap className="h-8 w-8 text-primary mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold">Licence Informatique</h3>
                    <p className="text-muted-foreground">Université Paris-Sud</p>
                    <Badge variant="outline" className="mt-2">2014 - 2017</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="cv-section bg-primary text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-8">Contactez-moi</h2>
          <p className="text-xl mb-8 opacity-90">
            Interessé par mon profil ? N'hésitez pas à me contacter pour discuter de vos projets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              <Mail className="h-5 w-5 mr-2" />
              Envoyer un email
            </Button>
            <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-primary">
              <Phone className="h-5 w-5 mr-2" />
              Appeler
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CVPage;