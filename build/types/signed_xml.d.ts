import * as XmlDSigJs from "xmldsigjs";
import * as XAdES from "./xml";
export interface OptionsSignerRole {
    claimed?: string[];
    certified?: string[];
}
export interface OptionsProductionPlace {
    city?: string;
    state?: string;
    code?: string;
    country?: string;
}
export interface OptionsNoticeReference {
    organization: string;
    noticeNumbers: number[];
}
export interface OptionsPolicyUserNotice {
    noticeRef?: OptionsNoticeReference;
    explicitText?: string;
}
export interface OptionsPolicyIdentifier {
    qualifier?: XAdES.IdentifierQualifier;
    value: string;
    description?: string;
    references?: string[];
}
export interface OptionsPolicyId {
    identifier: OptionsPolicyIdentifier;
    transforms?: XmlDSigJs.OptionsSignTransform[];
    hash: AlgorithmIdentifier;
    digestValue?: string;
    qualifiers?: (OptionsPolicyUserNotice | string)[];
}
export interface OptionsSigningTime {
    /**
     * Signing time value. Default value if now
     */
    value?: Date;
    /**
     * Format of the signing time. Default format is ISO
     */
    format?: string;
}
export interface OptionsSigningCertificate {
    certificate: string;
    digestAlgorithm?: AlgorithmIdentifier;
}
export interface OptionsSigningCertificateV2 {
    certificate: string;
    digestAlgorithm?: AlgorithmIdentifier;
}
export interface OptionsXAdES extends XmlDSigJs.OptionsSign {
    /**
     * Sets a certificate of signer for signature. Optional
     */
    signingCertificate?: string | OptionsSigningCertificate;
    /**
     * Sets a certificate of signer for signature. Optional
     */
    signingCertificateV2?: string | OptionsSigningCertificateV2;
    /**
     * Sets signing time options
     */
    signingTime?: OptionsSigningTime;
    policy?: OptionsPolicyId | boolean;
    productionPlace?: OptionsProductionPlace;
    signerRole?: OptionsSignerRole;
}
export declare class SignedXml extends XmlDSigJs.SignedXml {
    protected properties: XAdES.QualifyingProperties | null;
    get Properties(): XAdES.QualifyingProperties | null;
    get SignedProperties(): XAdES.SignedProperties;
    get UnsignedProperties(): XAdES.UnsignedProperties;
    constructor(node?: Document | Element);
    LoadXml(value: Element | string, useContainer?: boolean): void;
    Sign(algorithm: Algorithm, key: CryptoKey, data: Document | XmlDSigJs.DigestReferenceSource, options?: OptionsXAdES): Promise<XmlDSigJs.Signature>;
    SignDetached(algorithm: Algorithm, key: CryptoKey, options?: OptionsXAdES): Promise<XmlDSigJs.Signature>;
    protected CreateQualifyingProperties(): void;
    protected ApplySignOptions(signature: XmlDSigJs.Signature, algorithm: Algorithm, key: CryptoKey, options: OptionsXAdES): Promise<void>;
    protected ApplySigningCertificate(value?: string | OptionsSigningCertificate): Promise<void>;
    protected ApplySigningCertificateV2(value?: string | OptionsSigningCertificateV2): Promise<void>;
    protected ApplySignaturePolicyIdentifier(options?: OptionsPolicyId | boolean): Promise<void>;
    protected ApplySignatureProductionPlace(options?: OptionsProductionPlace): void;
    protected ApplySignerRoles(options?: OptionsSignerRole): void;
    protected VerifySigningCertificate(): Promise<XmlDSigJs.X509Certificate | null>;
}
