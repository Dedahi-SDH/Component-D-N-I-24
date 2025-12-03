import { useState } from "react";
import { Eye, EyeOff, Mail, User, Lock, Phone, Calendar } from "lucide-react";
import TextInput from "./inputText";
import EmailInput from "./inputEmail";
import PasswordInput from "./inputPassword";
import PrimaryBtn from "../button/Primary";
export default function FormComponentsDemo() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    password: "",
    telephone: "",
    acceptTerms: false,
    genre: "",
    pays: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleSubmit = () => {
    const newErrors = {};

    // Validation Nom
    if (!formData.nom) {
      newErrors.nom = "Le nom est requis";
    } else if (!/^[A-Za-z]{2,}$/.test(formData.nom)) {
      newErrors.nom = "Le nom doit contenir au moins 2 lettres";
    }

    // Validation Prénom (optionnel mais si rempli doit être correct)
    if (formData.prenom && !/^[A-Za-z]{2,}$/.test(formData.prenom)) {
      newErrors.prenom = "Le prénom doit contenir au moins 2 lettres";
    }

    // Validation Email
    if (!formData.email) {
      newErrors.email = "L'email est requis";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Email invalide";
    }

    // Validation Password
    if (!formData.password) {
      newErrors.password = "Le mot de passe est requis";
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+=[\]{};':"\\|,.<>/?]).{6,}$/.test(
        formData.password
      )
    ) {
      newErrors.password =
        "Le mot de passe doit contenir au moins 1 majuscule, 1 minuscule, 1 chiffre et 1 caractère spécial";
    }

    // Validation Téléphone
    if (formData.telephone && !/^\+222\d{8}$/.test(formData.telephone)) {
      newErrors.telephone =
        "Le numéro doit commencer par +222 et contenir exactement 8 chiffres après";
    }

    // Validation AcceptTerms
    if (!formData.acceptTerms) {
      newErrors.acceptTerms = "Vous devez accepter les conditions";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Formulaire soumis avec succès! ✅");
      console.log("Données du formulaire:", formData);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Composants de Formulaire
        </h1>
        <p className="text-gray-600 mb-8">
          Exemple d'utilisation des composants réutilisables
        </p>

        <TextInput
          label="Nom"
          placeholder="Votre nom"
          value={formData.nom}
          onChange={(val) => setFormData({ ...formData, nom: val })}
          error={errors.nom}
          icon={User}
        />

        <TextInput
          label="Prénom"
          placeholder="Votre prénom"
          value={formData.prenom}
          onChange={(val) => setFormData({ ...formData, prenom: val })}
          icon={User}
        />

        <EmailInput
          label="Email"
          placeholder="exemple@email.com"
          value={formData.email}
          onChange={(val) => setFormData({ ...formData, email: val })}
          error={errors.email}
        />

        <PasswordInput
          label="Mot de passe"
          placeholder="••••••••"
          value={formData.password}
          onChange={(val) => setFormData({ ...formData, password: val })}
          error={errors.password}
        />

        <TextInput
          label="Téléphone"
          placeholder="+222 XX XX XX XX"
          value={formData.telephone}
          onChange={(val) => setFormData({ ...formData, telephone: val })}
          icon={Phone}
        />
        {/* Radio compo
        <RadioGroup
          label="Genre"
          options={[
            { value: "homme", label: "Homme" },
            { value: "femme", label: "Femme" },
            { value: "autre", label: "Autre" },
          ]}
          selectedValue={formData.genre}
          onChange={(val) => setFormData({ ...formData, genre: val })}
        /> */}

        {/* Select compo
        <Select
          label="Pays"
          placeholder="Sélectionnez un pays"
          options={[
            { value: "maroc", label: "Maroc" },
            { value: "france", label: "France" },
            { value: "algerie", label: "Algérie" },
            { value: "tunisie", label: "Tunisie" },
          ]}
          value={formData.pays}
          onChange={(val) => setFormData({ ...formData, pays: val })}
        /> */}

        {/* TextArea compo
        <Textarea
          label="Message"
          placeholder="Écrivez votre message ici..."
          value={formData.message}
          onChange={(val) => setFormData({ ...formData, message: val })}
          rows={4}
        /> */}

        {/* Checkbox compo
        <Checkbox
          label="J'accepte les conditions d'utilisation *"
          checked={formData.acceptTerms}
          onChange={(val) => setFormData({ ...formData, acceptTerms: val })}
          error={errors.acceptTerms}
        /> */}

        <div className="flex gap-4 mt-6">
          <PrimaryBtn size="md" full>
            Allez
          </PrimaryBtn>
          <PrimaryBtn>Revenue</PrimaryBtn>
        </div>
      </div>
    </div>
  );
}
