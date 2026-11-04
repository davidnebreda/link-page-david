import React, { useState } from 'react';
import { PERSONAL_INFO } from '../../data/linksData';
import type { ContactFormData, FormErrors } from '../../types';
import {
  CheckCircleIcon,
  CopyIcon,
  MailIcon,
  MessageSquareIcon,
  RefreshIcon,
  SendIcon,
  TagIcon,
  UserIcon,
} from '../UI/Icons';
import './ContactSection.css';

const INITIAL_FORM: ContactFormData = {
  nombre: '',
  asunto: '',
  email: '',
  mensaje: '',
};

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);
  const [feedbackNote, setFeedbackNote] = useState<string>('');

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.nombre.trim()) {
      newErrors.nombre = 'Por favor, introduce tu nombre y apellidos.';
    }

    if (!formData.asunto.trim()) {
      newErrors.asunto = 'Por favor, especifica el asunto del mensaje.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'El correo electrónico es obligatorio.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Introduce una dirección de correo válida.';
    }

    if (!formData.mensaje.trim()) {
      newErrors.mensaje = 'Por favor, escribe el contenido de tu mensaje.';
    } else if (formData.mensaje.trim().length < 10) {
      newErrors.mensaje = 'El mensaje debe tener al menos 10 caracteres.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    // Build the mailto link to dnebreda@blogdedavid.com as requested in specifications
    const recipient = PERSONAL_INFO.email;
    const subject = encodeURIComponent(`[Contacto Web] ${formData.asunto}`);
    const bodyContent = `Nombre: ${formData.nombre}\nEmail: ${formData.email}\nAsunto: ${formData.asunto}\n\nMensaje:\n${formData.mensaje}\n\n---\nEnviado desde el formulario de enlaces de David Nebreda`;
    const mailtoUrl = `mailto:${recipient}?subject=${subject}&body=${encodeURIComponent(bodyContent)}`;

    // Trigger email client
    window.location.href = mailtoUrl;

    setIsSubmitted(true);
    setFeedbackNote('Se ha preparado tu mensaje para enviar a ' + recipient);
  };

  const handleReset = () => {
    setFormData(INITIAL_FORM);
    setErrors({});
    setIsSubmitted(false);
    setFeedbackNote('Formulario limpiado correctamente.');
    setTimeout(() => setFeedbackNote(''), 3000);
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      // fallback
    }
  };

  return (
    <section className="section-card contact-section" id="contacto" aria-labelledby="contact-heading">
      <div className="section-header">
        <div className="section-title-wrap">
          <div className="section-icon-badge">
            <MailIcon size={22} />
          </div>
          <div>
            <h2 id="contact-heading" className="section-title">
              Formulario de Contacto
            </h2>
            <p className="section-subtitle">
              Escríbeme para proyectos, consultorías o colaboraciones
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={handleCopyEmail}
          className="contact-copy-badge"
          title="Copiar email de David"
          aria-label="Copiar dirección de correo"
        >
          {copiedEmail ? <CheckCircleIcon size={14} /> : <CopyIcon size={14} />}
          <span>{copiedEmail ? '¡Copiado!' : PERSONAL_INFO.email}</span>
        </button>
      </div>

      {feedbackNote && !isSubmitted && (
        <div className="contact-feedback-toast" role="status">
          {feedbackNote}
        </div>
      )}

      {isSubmitted ? (
        <div className="contact-success-card" role="alert">
          <div className="success-icon-wrap">
            <CheckCircleIcon size={40} />
          </div>
          <h3 className="success-title">¡Mensaje preparado con éxito!</h3>
          <p className="success-text">
            Se ha abierto tu aplicación de correo predeterminada para enviar el mensaje a{' '}
            <strong>{PERSONAL_INFO.email}</strong>.
          </p>
          <p className="success-subtext">
            Si tu cliente de correo no se abrió automáticamente, puedes enviar un email directo haciendo clic en el siguiente botón:
          </p>

          <div className="success-actions">
            <a
              href={`mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
                formData.asunto
              )}`}
              className="success-btn-primary"
            >
              <MailIcon size={16} />
              <span>Abrir mi correo ({PERSONAL_INFO.email})</span>
            </a>
            <button
              type="button"
              onClick={handleReset}
              className="success-btn-secondary"
            >
              <RefreshIcon size={16} />
              <span>Enviar otro mensaje</span>
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} onReset={handleReset} noValidate className="contact-form">
          <div className="form-grid">
            {/* Nombre y apellidos */}
            <div className="form-group">
              <label htmlFor="nombre" className="form-label">
                <UserIcon size={15} />
                <span>Nombre y apellidos *</span>
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Ej: David Nebreda"
                className={`form-input ${errors.nombre ? 'has-error' : ''}`}
                required
                aria-required="true"
                aria-invalid={!!errors.nombre}
                aria-describedby={errors.nombre ? 'nombre-error' : undefined}
              />
              {errors.nombre && (
                <span id="nombre-error" className="field-error" role="alert">
                  {errors.nombre}
                </span>
              )}
            </div>

            {/* Email */}
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                <MailIcon size={15} />
                <span>Correo electrónico *</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="tu-correo@ejemplo.com"
                className={`form-input ${errors.email ? 'has-error' : ''}`}
                required
                aria-required="true"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && (
                <span id="email-error" className="field-error" role="alert">
                  {errors.email}
                </span>
              )}
            </div>
          </div>

          {/* Asunto */}
          <div className="form-group">
            <label htmlFor="asunto" className="form-label">
              <TagIcon size={15} />
              <span>Asunto *</span>
            </label>
            <input
              type="text"
              id="asunto"
              name="asunto"
              value={formData.asunto}
              onChange={handleChange}
              placeholder="Ej: Propuesta de proyecto web o consultoría"
              className={`form-input ${errors.asunto ? 'has-error' : ''}`}
              required
              aria-required="true"
              aria-invalid={!!errors.asunto}
              aria-describedby={errors.asunto ? 'asunto-error' : undefined}
            />
            {errors.asunto && (
              <span id="asunto-error" className="field-error" role="alert">
                {errors.asunto}
              </span>
            )}
          </div>

          {/* Mensaje */}
          <div className="form-group">
            <label htmlFor="mensaje" className="form-label">
              <MessageSquareIcon size={15} />
              <span>Mensaje *</span>
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows={5}
              value={formData.mensaje}
              onChange={handleChange}
              placeholder="Cuéntame en detalle tu idea, proyecto o consulta..."
              className={`form-textarea ${errors.mensaje ? 'has-error' : ''}`}
              required
              aria-required="true"
              aria-invalid={!!errors.mensaje}
              aria-describedby={errors.mensaje ? 'mensaje-error' : undefined}
            ></textarea>
            {errors.mensaje && (
              <span id="mensaje-error" className="field-error" role="alert">
                {errors.mensaje}
              </span>
            )}
          </div>

          <div className="contact-recipient-note">
            <span>El mensaje se enviará directamente a: </span>
            <strong>{PERSONAL_INFO.email}</strong>
          </div>

          {/* Botones de enviar y limpiar as specified in PDF */}
          <div className="form-actions">
            <button type="submit" className="btn-submit">
              <SendIcon size={16} />
              <span>Enviar mensaje</span>
            </button>
            <button type="reset" className="btn-reset">
              <RefreshIcon size={16} />
              <span>Limpiar</span>
            </button>
          </div>
        </form>
      )}
    </section>
  );
};

