package xyz.repom.jhipster.react.monolithic.repository;

import xyz.repom.jhipster.react.monolithic.domain.Authority;

import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Spring Data MongoDB repository for the Authority entity.
 */
public interface AuthorityRepository extends MongoRepository<Authority, String> {
}
