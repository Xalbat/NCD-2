package fr.formation.model;

import java.time.LocalDate;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name="vol")
public class Vol {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id")
	int id;
	
	@Column(name="pilote")
	Pilote pilote;
	
	@Column(name="avion")
	Avion avion;
	
	@Column(name="situation_vol")
	SituationVol situationVol;
	
	//@Column(name="id_respo_vol")
	//Parachustiste respoVol;
	
	//@Column(name="id_respo_sol")
	//Parachustiste respoSol;
	
	@Column(name = "date", nullable = false)
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	@JsonFormat(pattern = "yyyy-MM-dd")
	private LocalDate date;
	
	
	
	

}
