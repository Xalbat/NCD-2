package fr.formation.model;

import java.util.List;

import javax.persistence.Column;
<<<<<<< HEAD
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
=======
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;
>>>>>>> boot

import com.fasterxml.jackson.annotation.JsonView;

import fr.formation.projection.Views;

<<<<<<< HEAD
=======
@Entity
@Table(name = "pilote")
>>>>>>> boot
public class Pilote {
	
	//Attributs
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
<<<<<<< HEAD
	@Column(name = "PILOTE_ID")
	@JsonView(Views.Pilote.class)
	private int idPilote;
	
	@Column(name = "PILOTE_NOM", nullable = false)
	@JsonView(Views.Pilote.class)
	private String nom;
	
	@Column(name = "PILOTE_PRENOM", nullable = false)
	@JsonView(Views.Pilote.class)
	private String prenom;
	
	@Column(name = "PILOTE_LICENCE", nullable = false)
	@JsonView(Views.Pilote.class)
	private int licence;

	@OneToMany(mappedBy = "idAvion")
=======
	@Column(name = "id")
	@JsonView(Views.Pilote.class)
	private int idPilote;
	
	@Column(name = "nom", nullable = false)
	@JsonView(Views.Pilote.class)
	private String nom;
	
	@Column(name = "prenom", nullable = false)
	@JsonView(Views.Pilote.class)
	private String prenom;
	
	@Column(name = "licence", nullable = false)
	@JsonView(Views.Pilote.class)
	private int licence;

	@OneToMany(mappedBy = "id_avion")
>>>>>>> boot
	private List<Avion> listeAvion;

	//Getters & Setters
	public int getIdPilote() {
		return idPilote;
	}

	public void setIdPilote(int idPilote) {
		this.idPilote = idPilote;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public String getPrenom() {
		return prenom;
	}

	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}

	public int getLicence() {
		return licence;
	}

	public void setLicence(int licence) {
		this.licence = licence;
	}

	public List<Avion> getListeAvion() {
		return listeAvion;
	}

	public void setListeAvion(List<Avion> listeAvion) {
		this.listeAvion = listeAvion;
	}
	
	//toString
	@Override
	public String toString() {
		return "Pilote [idPilote=" + idPilote + ", nom=" + nom + ", prenom=" + prenom + ", licence=" + licence
				+ ", listeAvion=" + listeAvion + "]";
	}
	
	//Constructeurs
	public Pilote(int idPilote, String nom, String prenom, int licence, List<Avion> listeAvion) {
		super();
		this.idPilote = idPilote;
		this.nom = nom;
		this.prenom = prenom;
		this.licence = licence;
		this.listeAvion = listeAvion;
	}

	public Pilote() {}
}
