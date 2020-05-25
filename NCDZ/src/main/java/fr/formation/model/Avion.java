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
import fr.formation.enumerator.SituationAvion;
import fr.formation.projection.Views;

@Entity
@Table(name = "avion")
public class Avion {
	
	//Attributs
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	@JsonView(Views.Common.class)
	private int idAvion;
	
	@Column(name = "altitude", nullable = false)
	@JsonView(Views.Avion.class)
	private int altitudeMax;
	
	@Column(name = "capacite", nullable = false)
	@JsonView(Views.Avion.class)
	private int capacite;
	
	@Column(name = "rotation_ max", nullable = false)
	@JsonView(Views.Avion.class)
	private int rotationMax;
	
	@Column(name = "rotation", nullable = false)
	@JsonView(Views.Avion.class)
	private int rotation;
	
	@Column(name = "temps_montee", nullable = false)
	@JsonView(Views.Avion.class)
	private int tempsMontee;
	
	@Column(name = "etat")
	@Enumerated(EnumType.STRING)
	@JsonView({Views.Avion.class, Views.Pilote.class})
	private EtatAvion etat;
	
	@Column(name = "situation", nullable = false)
	@Enumerated(EnumType.STRING)
	@JsonView(Views.Avion.class)
	private SituationAvion situation;
	
	//Constructeurs
	public Avion() {}
	
	public Avion(int idAvion, int altitudeMax, int capacite, int rotationMax, int rotation, int tempsMontee,
			EtatAvion etat, SituationAvion situation) {
		super();
		this.idAvion = idAvion;
		this.altitudeMax = altitudeMax;
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
	public int getAltitudeMax() {
		return altitudeMax;
	}
	public void setAltitudeMax(int altitudeMax) {
		this.altitudeMax = altitudeMax;
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
		return "Avion [id=" + idAvion + ", altitudeMax=" + altitudeMax + ", capacite=" + capacite + ", rotationMax="
				+ rotationMax + ", rotation=" + rotation + "]";
	}
	
	
	
}
