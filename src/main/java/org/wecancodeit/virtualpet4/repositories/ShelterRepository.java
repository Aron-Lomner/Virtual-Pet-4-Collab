package org.wecancodeit.virtualpet4.repositories;


import org.springframework.data.repository.CrudRepository;
import org.wecancodeit.virtualpet4.models.ShelterModel;

public interface ShelterRepository  extends CrudRepository<ShelterModel, Long>{
    //Collection<PetModel> findShelterId(long shelterId);
}
