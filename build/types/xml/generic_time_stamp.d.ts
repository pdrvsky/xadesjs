import { CanonicalizationMethod, DigestMethod } from "xmldsigjs";
import { Any } from "./any";
import { EncapsulatedPKIData } from "./encapsulated_pki_data";
import { XadesCollection, XadesObject } from "./xml_base";
/**
 *
 * <xsd:element name="Include" type="IncludeType"/>
 * <xsd:complexType name="IncludeType">
 *   <xsd:attribute name="URI" type="xsd:anyURI" use="required"/>
 *   <xsd:attribute name="referencedData" type="xsd:boolean" use="optional"/>
 * </xsd:complexType>
 * <xsd:element name="ReferenceInfo" type="ReferenceInfoType"/>
 * <xsd:complexType name="ReferenceInfoType">
 *   <xsd:sequence>
 *     <xsd:element ref="ds:DigestMethod"/>
 *     <xsd:element ref="ds:DigestValue"/>
 *   </xsd:sequence>
 *   <xsd:attribute name="Id" type="xsd:ID" use="optional"/>
 *   <xsd:attribute name="URI" type="xsd:anyURI" use="optional"/>
 * </xsd:complexType>
 * <xsd:complexType name="GenericTimeStampType" abstract="true">
 *   <xsd:sequence>
 *     <xsd:choice minOccurs="0">
 *       <xsd:element ref="Include" minOccurs="0" maxOccurs="unbounded"/>
 *       <xsd:element ref="ReferenceInfo" maxOccurs="unbounded"/>
 *     </xsd:choice>
 *     <xsd:element ref="ds:CanonicalizationMethod" minOccurs="0"/>
 *     <xsd:choice maxOccurs="unbounded">
 *       <xsd:element name="EncapsulatedTimeStamp" type="EncapsulatedPKIDataType"/>
 *       <xsd:element name="XMLTimeStamp" type="AnyType"/>
 *     </xsd:choice>
 *   </xsd:sequence>
 *   <xsd:attribute name="Id" type="xsd:ID" use="optional"/>
 * </xsd:complexType>
 *
 */
export declare class Include extends XadesObject {
    Uri: string;
    ReferencedData: boolean;
}
export declare class ReferenceInfo extends XadesObject {
    Uri: string;
    Id: string;
    /**
     * Gets or sets the digest method Uniform Resource Identifier (URI) of the current
     */
    DigestMethod: DigestMethod;
    /**
     * Gets or sets the digest value of the current Reference.
     */
    DigestValue: Uint8Array;
}
export declare class ReferenceInfos extends XadesCollection<ReferenceInfo> {
}
export declare class EncapsulatedTimeStamp extends EncapsulatedPKIData {
}
export declare class EncapsulatedTimeStampCollection extends XadesCollection<EncapsulatedTimeStamp> {
}
export declare class XMLTimeStamp extends Any {
}
export declare class XMLTimeStampCollection extends XadesCollection<XMLTimeStamp> {
}
export declare class GenericTimeStamp extends XadesObject {
    Id: string;
    Include: Include;
    ReferenceInfo: ReferenceInfos;
    CanonicalizationMethod: CanonicalizationMethod;
    EncapsulatedTimeStamp: EncapsulatedTimeStampCollection;
    XMLTimeStamp: XMLTimeStampCollection;
}
