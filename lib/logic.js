import { AssetRegistry } from "composer-client";

/* global getAssetRegistry getFactory */

const modelNamespace = 'org.acme.enginesupplychain';
function uuid() {
    const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    return `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
}

/**
 * Creation of a Engine Asset triggered by physical production.
 * @param {org.acme.enginesupplychain.EngineCreation} tx - the transaction to crate a engine
 * @transaction
 */
async function createEngineAsset(tx) { //eslint-disable-line no-unused-vars
    const engineRegistry = await getAssetRegistry(modelNamespace + '.Engine');
    const engine = getFactory().newResource(modelNamespace, 'Engine', uuid());
    const engineData = getFactory().newConcept(modelNamespace, 'EngineProperties');

    engine.data = Object.assign(engineData, tx.data);
    engine.manufacturer = tx.manufacturer;

    await engineRegistry.add(engine);
}