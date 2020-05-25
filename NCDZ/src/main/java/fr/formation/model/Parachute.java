package fr.formation.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import fr.formation.enumerator.EtatParachute;
import fr.formation.enumerator.Proprietaire;

@Entity
@Table(name = "Parachute")
public class Parachute {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private int id;
	
	@Column(name = "nomHarnais", nullable = false)
	private String nomHarnais;
	
	@Column(name = "nom_securite", nullable = false)
	private String nomSecurite;
	
	@Column(name = "nom_voile_principale", nullable = false)
	private String nomVoilePricipale;
	
	@Column(name = "taille_voile_principale", nullable = false)
	private String tailleVoilePricipale;
	
	@Column(name = "nom_voile_secours", nullable = false)
	private String nomVoileSecours;
	
	@Column(name = "taille_voile_secours", nullable = false)
	private String tailleVoileSecours;
	
	@OneToOne
	@Column(name = "revision", nullable = false)
	private Revision revision;
	
	@Column(name = "proprietaire", nullable = false)
	private Proprietaire proprietaire;
	
	@Column(name = "etat_parachute", nullable = false)
	private EtatParachute etatParachute;

	

	// -----------   Getter Setter -------------- //
	
	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public String getNomHarnais() {
		return nomHarnais;
	}


	public void setNomHarnais(String nomHarnais) {
		this.nomHarnais = nomHarnais;
	}


	public String getNomSecurite() {
		return nomSecurite;
	}


	public void setNomSecurite(String nomSecurite) {
		this.nomSecurite = nomSecurite;
	}


	public String getNomVoilePricipale() {
		return nomVoilePricipale;
	}


	public void setNomVoilePricipale(String nomVoilePricipale) {
		this.nomVoilePricipale = nomVoilePricipale;
	}


	public String getTailleVoilePricipale() {
		return tailleVoilePricipale;
	}


	public void setTailleVoilePricipale(String tailleVoilePricipale) {
		this.tailleVoilePricipale = tailleVoilePricipale;
	}


	public String getNomVoileSecours() {
		return nomVoileSecours;
	}


	public void setNomVoileSecours(String nomVoileSecours) {
		this.nomVoileSecours = nomVoileSecours;
	}


	public String getTailleVoileSecours() {
		return tailleVoileSecours;
	}


	public void setTailleVoileSecours(String tailleVoileSecours) {
		this.tailleVoileSecours = tailleVoileSecours;
	}


	public Revision getRevision() {
		return revision;
	}


	public void setRevision(Revision revision) {
		this.revision = revision;
	}


	public Proprietaire getProprietaire() {
		return proprietaire;
	}


	public void setProprietaire(Proprietaire proprietaire) {
		this.proprietaire = proprietaire;
	}


	public EtatParachute getEtatParachute() {
		return etatParachute;
	}


	public void setEtatParachute(EtatParachute etatParachute) {
		this.etatParachute = etatParachute;
	}
	
	
}
