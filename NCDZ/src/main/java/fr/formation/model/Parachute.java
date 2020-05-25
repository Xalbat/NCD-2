package fr.formation.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import fr.formation.enumerator.EtatParachute;
import fr.formation.enumerator.Proprietaire;
import fr.formation.enumerator.TypeSecurite;

@Entity
@Table(name = "parachute")
public class Parachute {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private int id;
	
	@Column(name = "nom_harnais", nullable = false)
	private String nomHarnais;
	
	@Column(name = "type_securite", nullable = false)
	@Enumerated(EnumType.ORDINAL)
	private TypeSecurite typeSecurite;
	
	@Column(name = "nom_voile_principale", nullable = false)
	private String nomVoilePricipale;
	
	@Column(name = "taille_voile_principale", nullable = false)
	private String tailleVoilePricipale;
	
	@Column(name = "nom_voile_secours", nullable = false)
	private String nomVoileSecours;
	
	@Column(name = "taille_voile_secours", nullable = false)
	private String tailleVoileSecours;
	
	@OneToOne
	@NotNull
	private Revision revision;
	
	@Column(name = "proprietaire", nullable = false)
	@Enumerated(EnumType.STRING)
	private Proprietaire proprietaire;
	
	@Column(name = "etat_parachute", nullable = false)
	@Enumerated(EnumType.STRING)
	private EtatParachute etatParachute;

	
	
	public Parachute() {}

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


	public TypeSecurite getNomSecurite() {
		return typeSecurite;
	}


	public void setNomSecurite(TypeSecurite nomSecurite) {
		this.typeSecurite = nomSecurite;
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
