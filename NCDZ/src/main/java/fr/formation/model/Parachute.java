package fr.formation.model;

import fr.formation.enumerator.EtatParachute;
import fr.formation.enumerator.Proprietaire;

public class Parachute {

	private int id;
	
	
	private String nomHarnais;
	
	
	private String nomSecurite;
	
	
	private String nomVoilePricipale;
	
	
	private String tailleVoilePricipale;
	
	
	private String nomVoileSecours;
	
	
	private String tailleVoileSecours;
	
	
	private int revision;
	
	
	private Proprietaire proprietaire;
	
	
	private EtatParachute etatParachute;


	
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


	public int getRevision() {
		return revision;
	}


	public void setRevision(int revision) {
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
