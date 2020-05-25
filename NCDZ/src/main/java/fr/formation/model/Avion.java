package fr.formation.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonView;

import fr.formation.enumerator.EtatAvion;
import fr.formation.projection.Views;

@Entity
@Table(name = "avion")
public class Avion {
	
	//Attributs
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "AVION_ID")
	@JsonView(Views.Common.class)
	private int idAvion;
	@Column(name = "AVION_HAUTEUR", nullable = false)
	@JsonView(Views.Avion.class)
	private int hauteurMax;
	@Column(name = "AVION_CAPACITE", nullable = false)
	@JsonView(Views.Avion.class)
	private int capacite;
	@Column(name = "AVION_ROTATIONMAX", nullable = false)
	@JsonView(Views.Avion.class)
	private int rotationMax;
	@Column(name = "AVION_ROTATION", nullable = false)
	@JsonView(Views.Avion.class)
	private int rotation;
	@Column(name = "AVION_TEMPSMONTEE", nullable = false)
	@JsonView(Views.Avion.class)
	private int tempsMontee;
	@Column(name = "AVION_ETAT")
	@Enumerated(EnumType.STRING)
	@JsonView(Views.Avion.class)
	private EtatAvion etat;
	@Column(name = "AVION_SITUATION", nullable = false)
	@Enumerated(EnumType.STRING)
	@JsonView(Views.Avion.class)
	private SituationAvion situation;
	
	//Constructeurs
	public Avion() {}
	
	public Avion(int idAvion, int hauteurMax, int capacite, int rotationMax, int rotation, int tempsMontee,
			EtatAvion etat, SituationAvion situation) {
		super();
		this.idAvion = idAvion;
		this.hauteurMax = hauteurMax;
		this.capacite = capacite;
		this.rotationMax = rotationMax;
		this.rotation = rotation;
		this.tempsMontee = tempsMontee;
		this.etat = etat;
		this.situation = situation;
	}
	
	//Getters Setters
	public int getIdAvion() {
		return idAvion;
	}
	public void setIdAvion(int id) {
		this.idAvion = id;
	}
	public int getHauteurMax() {
		return hauteurMax;
	}
	public void setHauteurMax(int hauteurMax) {
		this.hauteurMax = hauteurMax;
	}
	public int getCapacite() {
		return capacite;
	}
	public void setCapacite(int capacite) {
		this.capacite = capacite;
	}
	public int getRotationMax() {
		return rotationMax;
	}
	public void setRotationMax(int rotationMax) {
		this.rotationMax = rotationMax;
	}
	public int getRotation() {
		return rotation;
	}
	public void setRotation(int rotation) {
		this.rotation = rotation;
	}
	
	//toString
	@Override
	public String toString() {
		return "Avion [id=" + idAvion + ", hauteurMax=" + hauteurMax + ", capacite=" + capacite + ", rotationMax="
				+ rotationMax + ", rotation=" + rotation + "]";
	}
	
	
	
}
